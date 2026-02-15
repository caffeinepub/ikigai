import { useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { ShoppingBag, CheckCircle2, CreditCard, Smartphone, Banknote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { useCart } from '../store/cart';
import { formatINR } from '../lib/currency';

type PaymentMethod = 'upi' | 'card' | 'cod' | null;

export default function CheckoutPage() {
  const navigate = useNavigate();
  const { items, subtotal, clearCart } = useCart();
  const [selectedPayment, setSelectedPayment] = useState<PaymentMethod>(null);
  const [orderPlaced, setOrderPlaced] = useState(false);

  // Empty cart state
  if (items.length === 0 && !orderPlaced) {
    return (
      <div className="checkout-page-background min-h-[calc(100vh-4rem)]">
        <div className="container py-16 md:py-24">
          <div className="mx-auto max-w-md text-center space-y-6">
            <ShoppingBag className="mx-auto h-16 w-16 text-muted-foreground" />
            <div className="space-y-2">
              <h1 className="text-2xl font-medium">Your cart is empty</h1>
              <p className="text-muted-foreground">
                Add some products before checking out
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" onClick={() => navigate({ to: '/catalog' })}>
                Browse Catalog
              </Button>
              <Button variant="outline" size="lg" onClick={() => navigate({ to: '/cart' })}>
                View Cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Order confirmation state
  if (orderPlaced) {
    return (
      <div className="checkout-page-background min-h-[calc(100vh-4rem)]">
        <div className="container py-16 md:py-24">
          <div className="mx-auto max-w-2xl">
            <Card className="bg-card/95 backdrop-blur-sm">
              <CardContent className="pt-12 pb-12 text-center space-y-6">
                <CheckCircle2 className="mx-auto h-20 w-20 text-primary" />
                <div className="space-y-3">
                  <h1 className="text-3xl md:text-4xl font-medium">Order Placed Successfully!</h1>
                  <p className="text-lg text-muted-foreground max-w-md mx-auto">
                    Thank you for your order. We'll send you a confirmation email shortly with your order details.
                  </p>
                </div>
                <Separator className="my-6" />
                <div className="space-y-4">
                  <div className="flex justify-between text-sm max-w-sm mx-auto">
                    <span className="text-muted-foreground">Order Total</span>
                    <span className="font-medium text-lg">{formatINR(subtotal)}</span>
                  </div>
                  <div className="flex justify-between text-sm max-w-sm mx-auto">
                    <span className="text-muted-foreground">Payment Method</span>
                    <span className="font-medium">
                      {selectedPayment === 'upi' && 'UPI'}
                      {selectedPayment === 'card' && 'Credit/Debit Card'}
                      {selectedPayment === 'cod' && 'Cash on Delivery'}
                    </span>
                  </div>
                </div>
                <div className="pt-6 flex flex-col sm:flex-row gap-3 justify-center">
                  <Button size="lg" onClick={() => navigate({ to: '/' })}>
                    Back to Home
                  </Button>
                  <Button variant="outline" size="lg" onClick={() => navigate({ to: '/catalog' })}>
                    Continue Shopping
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  const handlePlaceOrder = () => {
    if (!selectedPayment) return;
    setOrderPlaced(true);
    clearCart();
  };

  return (
    <div className="checkout-page-background min-h-[calc(100vh-4rem)]">
      <div className="container py-12 md:py-16">
        <div className="space-y-8">
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight">Checkout</h1>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Payment Method Section */}
            <div className="lg:col-span-2 space-y-6">
              <Card className="bg-card/95 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Payment Method</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <RadioGroup
                    value={selectedPayment || ''}
                    onValueChange={(value) => setSelectedPayment(value as PaymentMethod)}
                  >
                    <div className="space-y-3">
                      {/* UPI Option */}
                      <div className="flex items-center space-x-3 rounded-lg border p-4 hover:bg-accent/50 transition-colors cursor-pointer">
                        <RadioGroupItem value="upi" id="upi" />
                        <Label htmlFor="upi" className="flex items-center gap-3 flex-1 cursor-pointer">
                          <Smartphone className="h-5 w-5 text-primary" />
                          <div className="flex-1">
                            <div className="font-medium">UPI</div>
                            <div className="text-sm text-muted-foreground">
                              Pay using Google Pay, PhonePe, Paytm, or any UPI app
                            </div>
                          </div>
                        </Label>
                      </div>

                      {/* Card Option */}
                      <div className="flex items-center space-x-3 rounded-lg border p-4 hover:bg-accent/50 transition-colors cursor-pointer">
                        <RadioGroupItem value="card" id="card" />
                        <Label htmlFor="card" className="flex items-center gap-3 flex-1 cursor-pointer">
                          <CreditCard className="h-5 w-5 text-primary" />
                          <div className="flex-1">
                            <div className="font-medium">Credit / Debit Card</div>
                            <div className="text-sm text-muted-foreground">
                              Visa, Mastercard, RuPay, and American Express accepted
                            </div>
                          </div>
                        </Label>
                      </div>

                      {/* Cash on Delivery Option */}
                      <div className="flex items-center space-x-3 rounded-lg border p-4 hover:bg-accent/50 transition-colors cursor-pointer">
                        <RadioGroupItem value="cod" id="cod" />
                        <Label htmlFor="cod" className="flex items-center gap-3 flex-1 cursor-pointer">
                          <Banknote className="h-5 w-5 text-primary" />
                          <div className="flex-1">
                            <div className="font-medium">Cash on Delivery</div>
                            <div className="text-sm text-muted-foreground">
                              Pay with cash when your order is delivered
                            </div>
                          </div>
                        </Label>
                      </div>
                    </div>
                  </RadioGroup>

                  {selectedPayment && (
                    <div className="mt-6 p-4 rounded-lg bg-muted/50 border">
                      <p className="text-sm text-muted-foreground">
                        {selectedPayment === 'upi' && 'You will be redirected to complete your UPI payment after placing the order.'}
                        {selectedPayment === 'card' && 'You will be redirected to a secure payment page to enter your card details.'}
                        {selectedPayment === 'cod' && 'Please keep exact change ready when your order arrives.'}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Order Summary Section */}
            <div className="lg:col-span-1">
              <Card className="bg-card/95 backdrop-blur-sm sticky top-24">
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {items.map((item) => (
                      <div key={item.product.id} className="flex justify-between text-sm">
                        <div className="flex-1">
                          <div className="font-medium">{item.product.name}</div>
                          <div className="text-muted-foreground">Qty: {item.quantity}</div>
                        </div>
                        <div className="font-medium">
                          {formatINR(item.product.price * item.quantity)}
                        </div>
                      </div>
                    ))}
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span>{formatINR(subtotal)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Shipping</span>
                      <span className="text-primary">Free</span>
                    </div>
                  </div>

                  <Separator />

                  <div className="flex justify-between text-lg font-medium">
                    <span>Total</span>
                    <span>{formatINR(subtotal)}</span>
                  </div>

                  <Button
                    size="lg"
                    className="w-full"
                    disabled={!selectedPayment}
                    onClick={handlePlaceOrder}
                  >
                    Place Order
                  </Button>

                  {!selectedPayment && (
                    <p className="text-xs text-center text-muted-foreground">
                      Please select a payment method to continue
                    </p>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

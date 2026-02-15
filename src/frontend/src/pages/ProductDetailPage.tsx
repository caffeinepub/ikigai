import { useState } from 'react';
import { useParams, useNavigate } from '@tanstack/react-router';
import { ChevronLeft, Minus, Plus, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { products } from '../data/products';
import { useCart } from '../store/cart';
import { formatINR } from '../lib/currency';

export default function ProductDetailPage() {
  const { productId } = useParams({ strict: false }) as { productId: string };
  const navigate = useNavigate();
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);

  const product = products.find(p => p.id === productId);

  if (!product) {
    return (
      <div className="container py-12">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-medium">Product not found</h1>
          <Button onClick={() => navigate({ to: '/catalog' })}>
            Return to Catalog
          </Button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, quantity);
    navigate({ to: '/cart' });
  };

  const incrementQuantity = () => setQuantity(q => q + 1);
  const decrementQuantity = () => setQuantity(q => Math.max(1, q - 1));

  return (
    <div className="container py-8 md:py-12">
      <Button
        variant="ghost"
        className="mb-6"
        onClick={() => navigate({ to: '/catalog' })}
      >
        <ChevronLeft className="mr-2 h-4 w-4" />
        Back to Shop
      </Button>

      <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
        {/* Product Image */}
        <div className="space-y-4">
          <div className="aspect-square overflow-hidden rounded-lg bg-muted">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">{product.categoryLabel}</p>
            <h1 className="text-3xl md:text-4xl font-medium tracking-tight">
              {product.name}
            </h1>
            <p className="text-2xl font-medium">{formatINR(product.price)}</p>
          </div>

          <Separator />

          <div className="space-y-4">
            <h2 className="text-lg font-medium">Description</h2>
            <p className="text-muted-foreground leading-relaxed">
              {product.description}
            </p>
          </div>

          {product.material && (
            <div className="space-y-2">
              <h3 className="text-sm font-medium">Material</h3>
              <p className="text-sm text-muted-foreground">{product.material}</p>
            </div>
          )}

          {product.highlights && product.highlights.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Features</h3>
              <ul className="space-y-2">
                {product.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start text-sm text-muted-foreground">
                    <span className="mr-2 mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <Separator />

          {/* Quantity Selector */}
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <span className="text-sm font-medium">Quantity</span>
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={decrementQuantity}
                  disabled={quantity <= 1}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={incrementQuantity}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <Button size="lg" className="w-full" onClick={handleAddToCart}>
              <ShoppingCart className="mr-2 h-5 w-5" />
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

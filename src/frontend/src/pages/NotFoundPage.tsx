import { useNavigate } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Home, Package } from 'lucide-react';

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="container py-16 md:py-24">
      <div className="mx-auto max-w-2xl">
        <Card className="border-muted">
          <CardHeader className="text-center space-y-4 pb-8">
            <div className="mx-auto w-16 h-16 rounded-full bg-muted flex items-center justify-center">
              <span className="text-3xl font-light text-muted-foreground">404</span>
            </div>
            <CardTitle className="text-3xl md:text-4xl font-medium tracking-tight">
              Page Not Found
            </CardTitle>
            <CardDescription className="text-base md:text-lg">
              The page you're looking for doesn't exist or has been moved.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                size="lg"
                className="gap-2"
                onClick={() => navigate({ to: '/' })}
              >
                <Home className="h-4 w-4" />
                Back to Home
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2"
                onClick={() => navigate({ to: '/catalog' })}
              >
                <Package className="h-4 w-4" />
                Browse Catalog
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

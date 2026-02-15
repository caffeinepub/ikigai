import { useNavigate } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { copy } from '../data/copy';
import { categories } from '../data/products';

// Explicit mapping for category images to prevent broken references
const categoryImageMap: Record<string, string> = {
  'yoga-mats': '/assets/generated/product-yoga-mat.dim_1200x1200.png',
  'resistance-bands': '/assets/generated/product-resistance-bands.dim_1200x1200.png',
  'mobility-tools': '/assets/generated/product-mobility-tools.dim_1200x1200.png',
  'training-tops': '/assets/generated/product-training-top.dim_1200x1200.png',
  'training-bottoms': '/assets/generated/product-training-bottoms.dim_1200x1200.png',
};

export default function HomePage() {
  const navigate = useNavigate();

  const handleExploreEquipment = () => {
    navigate({ to: '/catalog', search: { category: 'equipment' } });
  };

  const handleExploreApparel = () => {
    navigate({ to: '/catalog', search: { category: 'apparel' } });
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: 'url(/assets/generated/hero-background.dim_2400x1200.png)' }}
        />
        <div className="container relative py-24 md:py-32 lg:py-40">
          <div className="mx-auto max-w-3xl text-center space-y-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter">
              {copy.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light tracking-wide">
              {copy.hero.tagline}
            </p>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              {copy.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                size="lg"
                className="text-base px-8"
                onClick={handleExploreEquipment}
              >
                Explore Equipment
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base px-8"
                onClick={handleExploreApparel}
              >
                Explore Apparel
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="container py-16 md:py-24">
        <div className="space-y-4 text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight">Featured Categories</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Curated tools and apparel for disciplined training
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.slice(0, 3).map((category) => (
            <Card
              key={category.id}
              className="group cursor-pointer transition-all hover:shadow-soft"
              onClick={() => navigate({ to: '/catalog', search: { category: category.id } })}
            >
              <CardHeader>
                <CardTitle className="text-xl">{category.label}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-square overflow-hidden rounded-md bg-muted">
                  <img
                    src={categoryImageMap[category.id]}
                    alt={category.label}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="space-y-4 text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight">
              {copy.philosophy.title}
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
            {copy.philosophy.sections.map((section) => (
              <div key={section.title} className="space-y-3 text-center">
                <h3 className="text-xl font-medium">{section.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {section.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Launching Soon Section */}
      <section className="container py-16 md:py-24">
        <Card className="overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center space-y-6">
              <div className="space-y-2">
                <p className="text-sm font-medium text-primary">{copy.launching.subtitle}</p>
                <h2 className="text-3xl md:text-4xl font-medium tracking-tight">
                  {copy.launching.title}
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {copy.launching.description}
              </p>
              <div>
                <Button size="lg" onClick={() => navigate({ to: '/catalog' })}>
                  View Collection
                </Button>
              </div>
            </div>
            <div className="relative h-64 md:h-auto bg-muted">
              <img
                src="/assets/generated/product-training-top.dim_1200x1200.png"
                alt="New Collection"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
}

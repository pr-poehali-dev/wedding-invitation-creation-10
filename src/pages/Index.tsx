import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import Icon from '@/components/ui/icon';

export default function Index() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    guests: '1',
    attending: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Спасибо за ответ!",
      description: "Мы получили ваше подтверждение и скоро свяжемся с вами.",
    });
    setFormData({ name: '', email: '', guests: '1', attending: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-secondary/30 to-background">
      <div className="container max-w-4xl mx-auto px-4 py-12">
        
        <section className="text-center mb-16 animate-fade-in">
          <div className="mb-8">
            <Icon name="Heart" className="mx-auto text-primary w-12 h-12 mb-6" />
          </div>
          <h1 className="text-6xl md:text-7xl font-light text-foreground mb-6 tracking-wide">
            Анна & Дмитрий
          </h1>
          <div className="flex items-center justify-center gap-4 mb-6">
            <Separator className="w-16" />
            <p className="text-xl md:text-2xl text-muted-foreground font-light">
              Приглашают вас на торжество
            </p>
            <Separator className="w-16" />
          </div>
          <p className="text-3xl md:text-4xl font-semibold text-primary mt-8">
            15 июля 2025
          </p>
        </section>

        <section className="mb-16 animate-scale-in">
          <Card className="p-8 md:p-12 bg-card/80 backdrop-blur-sm border-2">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center md:text-left">
                <div className="flex items-center gap-3 mb-4 justify-center md:justify-start">
                  <Icon name="Clock" className="text-primary w-6 h-6" />
                  <h3 className="text-2xl font-semibold">Время</h3>
                </div>
                <p className="text-lg text-muted-foreground mb-2">Церемония: 15:00</p>
                <p className="text-lg text-muted-foreground">Банкет: 17:00</p>
              </div>
              
              <div className="text-center md:text-left">
                <div className="flex items-center gap-3 mb-4 justify-center md:justify-start">
                  <Icon name="MapPin" className="text-primary w-6 h-6" />
                  <h3 className="text-2xl font-semibold">Место проведения</h3>
                </div>
                <p className="text-lg text-muted-foreground mb-2">Загородный клуб «Усадьба»</p>
                <p className="text-muted-foreground">Московская область, Истринский район</p>
              </div>
            </div>
          </Card>
        </section>

        <section className="mb-16">
          <Card className="p-8 md:p-12 bg-card/80 backdrop-blur-sm border-2">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-semibold mb-4">Подтверждение присутствия</h2>
              <p className="text-muted-foreground">
                Пожалуйста, подтвердите своё участие до 1 июля 2025
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Ваше имя</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  placeholder="Иван Иванов"
                  className="bg-background"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  placeholder="ivan@example.com"
                  className="bg-background"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="guests">Количество гостей</Label>
                <Input
                  id="guests"
                  type="number"
                  min="1"
                  max="5"
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  required
                  className="bg-background"
                />
              </div>

              <div className="space-y-3">
                <Label>Будете ли вы присутствовать?</Label>
                <div className="flex gap-4">
                  <Button
                    type="button"
                    variant={formData.attending === 'yes' ? 'default' : 'outline'}
                    onClick={() => setFormData({ ...formData, attending: 'yes' })}
                    className="flex-1"
                  >
                    <Icon name="Check" className="w-4 h-4 mr-2" />
                    Да, буду
                  </Button>
                  <Button
                    type="button"
                    variant={formData.attending === 'no' ? 'default' : 'outline'}
                    onClick={() => setFormData({ ...formData, attending: 'no' })}
                    className="flex-1"
                  >
                    <Icon name="X" className="w-4 h-4 mr-2" />
                    Не смогу
                  </Button>
                </div>
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={!formData.attending}
                className="w-full"
              >
                Отправить ответ
              </Button>
            </form>
          </Card>
        </section>

        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-accent/50 backdrop-blur-sm text-center">
              <Icon name="Shirt" className="mx-auto text-primary w-10 h-10 mb-4" />
              <h3 className="text-2xl font-semibold mb-3">Дресс-код</h3>
              <p className="text-muted-foreground leading-relaxed">
                Элегантный вечерний наряд. Цветовая гамма: пастельные оттенки, белый, бежевый
              </p>
            </Card>

            <Card className="p-8 bg-accent/50 backdrop-blur-sm text-center">
              <Icon name="Phone" className="mx-auto text-primary w-10 h-10 mb-4" />
              <h3 className="text-2xl font-semibold mb-3">Связь с нами</h3>
              <p className="text-muted-foreground mb-2">
                <a href="tel:+79001234567" className="hover:text-primary transition-colors">
                  +7 (900) 123-45-67
                </a>
              </p>
              <p className="text-muted-foreground">
                <a href="mailto:wedding@example.com" className="hover:text-primary transition-colors">
                  wedding@example.com
                </a>
              </p>
            </Card>
          </div>
        </section>

        <footer className="text-center pt-8 border-t">
          <p className="text-muted-foreground text-sm mb-4">
            Мы будем рады видеть вас на нашем празднике
          </p>
          <Icon name="Heart" className="mx-auto text-primary/60 w-6 h-6" />
        </footer>
      </div>
    </div>
  );
}

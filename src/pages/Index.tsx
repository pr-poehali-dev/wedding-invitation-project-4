import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [guestName, setGuestName] = useState('');
  const [needsTransfer, setNeedsTransfer] = useState<string>('');
  const [drinks, setDrinks] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const drinkOptions = [
    'Вино красное',
    'Вино белое',
    'Шампанское',
    'Водка',
    'Виски',
    'Коньяк',
    'Безалкогольные напитки'
  ];

  const handleDrinkToggle = (drink: string) => {
    setDrinks(prev =>
      prev.includes(drink)
        ? prev.filter(d => d !== drink)
        : [...prev, drink]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-primary rotate-45"></div>
        <div className="absolute top-20 right-20 w-24 h-24 border-2 border-secondary rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 border-2 border-primary"></div>
        <div className="absolute bottom-40 right-1/3 w-28 h-28 border-2 border-secondary rotate-12"></div>
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <section className="min-h-screen flex flex-col items-center justify-center text-center space-y-8 animate-fade-in">
          <div className="space-y-6">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-20 bg-primary"></div>
              <Icon name="Heart" className="text-primary" size={32} />
              <div className="h-px w-20 bg-primary"></div>
            </div>

            <h1 className="text-7xl md:text-9xl font-light tracking-wider text-foreground">
              Егор
            </h1>
            
            <div className="flex items-center justify-center gap-6">
              <div className="h-px w-12 bg-primary"></div>
              <span className="text-2xl text-muted-foreground font-light">&</span>
              <div className="h-px w-12 bg-primary"></div>
            </div>

            <h1 className="text-7xl md:text-9xl font-light tracking-wider text-foreground">
              Алия
            </h1>

            <div className="flex items-center justify-center gap-4 mt-8">
              <div className="h-px w-20 bg-primary"></div>
              <Icon name="Heart" className="text-primary" size={32} />
              <div className="h-px w-20 bg-primary"></div>
            </div>
          </div>

          <div className="space-y-4 mt-12">
            <p className="text-xl md:text-2xl font-light text-muted-foreground">
              Приглашаем вас разделить с нами
            </p>
            <p className="text-2xl md:text-3xl font-light text-foreground">
              особенный день нашей жизни
            </p>
          </div>

          <div className="mt-12 p-8 border-2 border-primary/20 rounded-lg bg-card/50 backdrop-blur-sm">
            <p className="text-5xl md:text-6xl font-light text-primary mb-4">
              27.05.2026
            </p>
          </div>
        </section>

        <section className="min-h-screen flex flex-col items-center justify-center py-20 animate-fade-in">
          <Card className="max-w-2xl w-full p-8 md:p-12 bg-card/80 backdrop-blur-sm border-2 border-primary/20">
            <div className="space-y-8">
              <div className="text-center space-y-4">
                <Icon name="MapPin" className="mx-auto text-primary" size={40} />
                <h2 className="text-4xl md:text-5xl font-light text-foreground">Площадка</h2>
                <div className="h-px w-24 bg-primary mx-auto"></div>
                <p className="text-xl md:text-2xl font-light text-muted-foreground mt-4">
                  Роща
                </p>
                <p className="text-lg text-muted-foreground">
                  Адрес: <span className="italic">(укажу позже)</span>
                </p>
              </div>

              <div className="h-px w-full bg-border my-8"></div>

              <div className="text-center space-y-4">
                <Icon name="Shirt" className="mx-auto text-primary" size={40} />
                <h2 className="text-4xl md:text-5xl font-light text-foreground">Дресс-код</h2>
                <div className="h-px w-24 bg-primary mx-auto"></div>
                <div className="flex flex-wrap justify-center gap-3 mt-6">
                  {[
                    { name: 'Красный', color: 'bg-red-600' },
                    { name: 'Бордовый', color: 'bg-red-900' },
                    { name: 'Чёрный', color: 'bg-black' },
                    { name: 'Молочный', color: 'bg-amber-50' },
                    { name: 'Коричневый', color: 'bg-amber-900' }
                  ].map(item => (
                    <div key={item.name} className="flex items-center gap-2 px-4 py-2 border border-border rounded-full">
                      <div className={`w-6 h-6 rounded-full ${item.color} border-2 border-foreground/20`}></div>
                      <span className="text-sm md:text-base">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </section>

        <section className="min-h-screen flex flex-col items-center justify-center py-20 animate-fade-in">
          <Card className="max-w-2xl w-full p-8 md:p-12 bg-card/80 backdrop-blur-sm border-2 border-primary/20">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="text-center space-y-4">
                  <Icon name="ClipboardList" className="mx-auto text-primary" size={40} />
                  <h2 className="text-4xl md:text-5xl font-light text-foreground">Опрос для гостей</h2>
                  <div className="h-px w-24 bg-primary mx-auto"></div>
                  <p className="text-muted-foreground mt-4">
                    Помогите нам подготовиться к празднику
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-lg">Ваше имя</Label>
                    <Input
                      id="name"
                      value={guestName}
                      onChange={(e) => setGuestName(e.target.value)}
                      placeholder="Введите ваше имя"
                      required
                      className="text-lg py-6"
                    />
                  </div>

                  <div className="space-y-4">
                    <Label className="text-lg">Нужен ли трансфер?</Label>
                    <RadioGroup value={needsTransfer} onValueChange={setNeedsTransfer} required>
                      <div className="flex items-center space-x-3 p-4 border border-border rounded-lg hover:border-primary transition-colors">
                        <RadioGroupItem value="yes" id="transfer-yes" />
                        <Label htmlFor="transfer-yes" className="cursor-pointer flex-1 text-base">
                          Да, нужен трансфер
                        </Label>
                      </div>
                      <div className="flex items-center space-x-3 p-4 border border-border rounded-lg hover:border-primary transition-colors">
                        <RadioGroupItem value="no" id="transfer-no" />
                        <Label htmlFor="transfer-no" className="cursor-pointer flex-1 text-base">
                          Нет, доберусь самостоятельно
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-4">
                    <Label className="text-lg">Какие напитки предпочитаете?</Label>
                    <div className="space-y-3">
                      {drinkOptions.map(drink => (
                        <div
                          key={drink}
                          className="flex items-center space-x-3 p-4 border border-border rounded-lg hover:border-primary transition-colors"
                        >
                          <Checkbox
                            id={drink}
                            checked={drinks.includes(drink)}
                            onCheckedChange={() => handleDrinkToggle(drink)}
                          />
                          <Label htmlFor={drink} className="cursor-pointer flex-1 text-base">
                            {drink}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full text-lg py-6 mt-8"
                    disabled={!guestName || !needsTransfer}
                  >
                    Отправить ответы
                  </Button>
                </div>
              </form>
            ) : (
              <div className="text-center space-y-6 py-12">
                <Icon name="CheckCircle2" className="mx-auto text-primary" size={64} />
                <h3 className="text-3xl md:text-4xl font-light text-foreground">
                  Спасибо, {guestName}!
                </h3>
                <p className="text-xl text-muted-foreground">
                  Ваши ответы сохранены
                </p>
                <div className="h-px w-24 bg-primary mx-auto mt-6"></div>
                <p className="text-lg text-muted-foreground mt-6">
                  Ждём вас на нашей свадьбе!
                </p>
              </div>
            )}
          </Card>
        </section>

        <footer className="py-12 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-20 bg-primary"></div>
            <Icon name="Heart" className="text-primary" size={24} />
            <div className="h-px w-20 bg-primary"></div>
          </div>
          <p className="text-muted-foreground font-light">
            С любовью, Егор и Алия
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;

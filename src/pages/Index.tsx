import { useState, useEffect } from 'react';
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
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  const weddingDate = new Date('2026-05-27T00:00:00');

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = weddingDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

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
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-10 left-10 w-40 h-40 border-[3px] border-primary rotate-45 rounded-3xl"></div>
        <div className="absolute top-40 right-32 w-32 h-32 border-[3px] border-secondary"></div>
        <div className="absolute top-1/3 left-1/4 w-24 h-24 border-[3px] border-primary rounded-full"></div>
        <div className="absolute bottom-32 left-20 w-36 h-36 border-[3px] border-secondary rotate-12 rounded-2xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-28 h-28 border-[3px] border-primary rotate-45"></div>
        <div className="absolute top-2/3 right-20 w-20 h-20 border-[3px] border-secondary rounded-full"></div>
      </div>

      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-30"></div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <section className="min-h-screen flex flex-col items-center justify-center text-center space-y-12 animate-fade-in">
          <div className="space-y-8">
            <div className="relative">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
              <div className="flex items-center justify-center gap-6 mb-8 relative">
                <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-primary to-primary"></div>
                <div className="relative">
                  <Icon name="Heart" className="text-primary animate-pulse" size={40} />
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl"></div>
                </div>
                <div className="h-[2px] w-24 bg-gradient-to-l from-transparent via-primary to-primary"></div>
              </div>
            </div>

            <div className="relative">
              <h1 className="text-8xl md:text-[10rem] font-light tracking-[0.2em] text-foreground relative">
                Егор
                <div className="absolute -bottom-2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
              </h1>
            </div>
            
            <div className="flex items-center justify-center gap-8 py-4">
              <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-primary"></div>
              <div className="relative">
                <span className="text-3xl text-primary font-light italic">&</span>
                <div className="absolute inset-0 bg-primary/10 rounded-full blur-lg scale-150"></div>
              </div>
              <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-primary"></div>
            </div>

            <div className="relative">
              <h1 className="text-8xl md:text-[10rem] font-light tracking-[0.2em] text-foreground relative">
                Алия
                <div className="absolute -bottom-2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
              </h1>
            </div>

            <div className="relative pt-4">
              <div className="flex items-center justify-center gap-6 relative">
                <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-primary to-primary"></div>
                <Icon name="Heart" className="text-primary" size={40} />
                <div className="h-[2px] w-24 bg-gradient-to-l from-transparent via-primary to-primary"></div>
              </div>
            </div>
          </div>

          <div className="space-y-6 mt-16">
            <p className="text-xl md:text-2xl font-light text-muted-foreground tracking-wide">
              Приглашаем вас разделить с нами
            </p>
            <p className="text-3xl md:text-4xl font-light text-foreground tracking-wide">
              особенный день нашей жизни
            </p>
          </div>

          <div className="mt-16 relative">
            <div className="absolute inset-0 bg-primary/5 rounded-3xl blur-2xl scale-110"></div>
            <Card className="relative p-10 md:p-12 border-2 border-primary/30 rounded-3xl bg-card/90 backdrop-blur-xl shadow-2xl">
              <p className="text-6xl md:text-7xl font-light text-primary mb-2 tracking-wide">
                27.05.2026
              </p>
              <div className="h-[1px] w-32 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto my-6"></div>
              
              <div className="grid grid-cols-4 gap-4 md:gap-6 mt-8">
                {[
                  { value: timeLeft.days, label: 'дней' },
                  { value: timeLeft.hours, label: 'часов' },
                  { value: timeLeft.minutes, label: 'минут' },
                  { value: timeLeft.seconds, label: 'секунд' }
                ].map((item, idx) => (
                  <div key={idx} className="relative">
                    <div className="absolute inset-0 bg-primary/5 rounded-2xl blur-md"></div>
                    <div className="relative bg-background/50 rounded-2xl p-4 md:p-6 border border-primary/20">
                      <div className="text-3xl md:text-5xl font-light text-primary tabular-nums">
                        {String(item.value).padStart(2, '0')}
                      </div>
                      <div className="text-xs md:text-sm text-muted-foreground mt-2 font-light">
                        {item.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </section>

        <section className="min-h-screen flex flex-col items-center justify-center py-20 animate-fade-in">
          <div className="relative w-full max-w-3xl">
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
            <Card className="relative p-10 md:p-16 bg-card/90 backdrop-blur-xl border-2 border-primary/30 rounded-3xl shadow-2xl">
              <div className="space-y-12">
                <div className="text-center space-y-6">
                  <div className="relative inline-block">
                    <Icon name="MapPin" className="text-primary" size={48} />
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl scale-150"></div>
                  </div>
                  <h2 className="text-5xl md:text-6xl font-light text-foreground tracking-wide">Площадка</h2>
                  <div className="h-[2px] w-32 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto"></div>
                  <p className="text-2xl md:text-3xl font-light text-foreground mt-6">
                    Роща
                  </p>
                  <p className="text-lg text-muted-foreground">
                    Адрес: <span className="italic text-primary">(укажу позже)</span>
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent h-[1px]"></div>
                  <div className="h-[1px] w-full bg-border my-12"></div>
                </div>

                <div className="text-center space-y-6">
                  <div className="relative inline-block">
                    <Icon name="Shirt" className="text-primary" size={48} />
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl scale-150"></div>
                  </div>
                  <h2 className="text-5xl md:text-6xl font-light text-foreground tracking-wide">Дресс-код</h2>
                  <div className="h-[2px] w-32 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto"></div>
                  
                  <div className="flex flex-wrap justify-center gap-4 mt-8">
                    {[
                      { name: 'Красный', color: 'bg-red-600', border: 'border-red-600' },
                      { name: 'Бордовый', color: 'bg-red-900', border: 'border-red-900' },
                      { name: 'Чёрный', color: 'bg-black', border: 'border-black' },
                      { name: 'Молочный', color: 'bg-amber-50', border: 'border-amber-200' },
                      { name: 'Коричневый', color: 'bg-amber-900', border: 'border-amber-900' }
                    ].map(item => (
                      <div key={item.name} className="relative group">
                        <div className="absolute inset-0 bg-primary/5 rounded-full blur-md group-hover:blur-lg transition-all"></div>
                        <div className={`relative flex items-center gap-3 px-6 py-3 border-2 ${item.border} rounded-full bg-background/50 backdrop-blur-sm hover:scale-105 transition-transform`}>
                          <div className={`w-8 h-8 rounded-full ${item.color} shadow-lg`}></div>
                          <span className="text-base font-light">{item.name}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-12 p-8 border-2 border-dashed border-primary/30 rounded-2xl bg-primary/5 hover:bg-primary/10 transition-colors">
                    <Icon name="ImagePlus" className="mx-auto text-primary mb-4" size={40} />
                    <p className="text-lg text-muted-foreground mb-3">Примеры образов</p>
                    <p className="text-sm text-muted-foreground/70 italic">
                      Здесь можно разместить фото примеров нарядов
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <section className="min-h-screen flex flex-col items-center justify-center py-20 animate-fade-in">
          <div className="relative w-full max-w-3xl">
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
            <Card className="relative p-10 md:p-16 bg-card/90 backdrop-blur-xl border-2 border-primary/30 rounded-3xl shadow-2xl">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-10">
                  <div className="text-center space-y-6">
                    <div className="relative inline-block">
                      <Icon name="ClipboardList" className="text-primary" size={48} />
                      <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl scale-150"></div>
                    </div>
                    <h2 className="text-5xl md:text-6xl font-light text-foreground tracking-wide">Опрос для гостей</h2>
                    <div className="h-[2px] w-32 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto"></div>
                    <p className="text-muted-foreground text-lg mt-4">
                      Помогите нам подготовиться к празднику
                    </p>
                  </div>

                  <div className="space-y-8">
                    <div className="space-y-3">
                      <Label htmlFor="name" className="text-xl font-light">Ваше имя</Label>
                      <Input
                        id="name"
                        value={guestName}
                        onChange={(e) => setGuestName(e.target.value)}
                        placeholder="Введите ваше имя"
                        required
                        className="text-lg py-7 rounded-xl border-2 border-primary/20 focus:border-primary bg-background/50"
                      />
                    </div>

                    <div className="space-y-4">
                      <Label className="text-xl font-light">Нужен ли трансфер?</Label>
                      <RadioGroup value={needsTransfer} onValueChange={setNeedsTransfer} required>
                        <div className="relative group">
                          <div className="absolute inset-0 bg-primary/5 rounded-2xl blur-md group-hover:blur-lg transition-all"></div>
                          <div className="relative flex items-center space-x-4 p-5 border-2 border-border rounded-2xl hover:border-primary transition-all bg-background/50">
                            <RadioGroupItem value="yes" id="transfer-yes" />
                            <Label htmlFor="transfer-yes" className="cursor-pointer flex-1 text-lg font-light">
                              Да, нужен трансфер
                            </Label>
                          </div>
                        </div>
                        <div className="relative group">
                          <div className="absolute inset-0 bg-primary/5 rounded-2xl blur-md group-hover:blur-lg transition-all"></div>
                          <div className="relative flex items-center space-x-4 p-5 border-2 border-border rounded-2xl hover:border-primary transition-all bg-background/50">
                            <RadioGroupItem value="no" id="transfer-no" />
                            <Label htmlFor="transfer-no" className="cursor-pointer flex-1 text-lg font-light">
                              Нет, доберусь самостоятельно
                            </Label>
                          </div>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="space-y-4">
                      <Label className="text-xl font-light">Какие напитки предпочитаете?</Label>
                      <div className="space-y-3">
                        {drinkOptions.map(drink => (
                          <div key={drink} className="relative group">
                            <div className="absolute inset-0 bg-primary/5 rounded-2xl blur-md group-hover:blur-lg transition-all"></div>
                            <div className="relative flex items-center space-x-4 p-5 border-2 border-border rounded-2xl hover:border-primary transition-all bg-background/50">
                              <Checkbox
                                id={drink}
                                checked={drinks.includes(drink)}
                                onCheckedChange={() => handleDrinkToggle(drink)}
                              />
                              <Label htmlFor={drink} className="cursor-pointer flex-1 text-lg font-light">
                                {drink}
                              </Label>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="relative group pt-4">
                      <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
                      <Button
                        type="submit"
                        size="lg"
                        className="relative w-full text-xl py-8 rounded-2xl bg-primary hover:bg-primary/90 transition-all hover:scale-[1.02]"
                        disabled={!guestName || !needsTransfer}
                      >
                        Отправить ответы
                      </Button>
                    </div>
                  </div>
                </form>
              ) : (
                <div className="text-center space-y-8 py-16">
                  <div className="relative inline-block">
                    <Icon name="CheckCircle2" className="text-primary" size={80} />
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl scale-150"></div>
                  </div>
                  <h3 className="text-4xl md:text-5xl font-light text-foreground">
                    Спасибо, {guestName}!
                  </h3>
                  <p className="text-2xl text-muted-foreground font-light">
                    Ваши ответы сохранены
                  </p>
                  <div className="h-[2px] w-32 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-8"></div>
                  <p className="text-xl text-muted-foreground mt-8 font-light">
                    Ждём вас на нашей свадьбе!
                  </p>
                </div>
              )}
            </Card>
          </div>
        </section>

        <footer className="py-16 text-center">
          <div className="space-y-6">
            <div className="flex items-center justify-center gap-6">
              <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-primary to-primary"></div>
              <div className="relative">
                <Icon name="Heart" className="text-primary" size={32} />
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl"></div>
              </div>
              <div className="h-[2px] w-24 bg-gradient-to-l from-transparent via-primary to-primary"></div>
            </div>
            <p className="text-muted-foreground font-light text-lg tracking-wide">
              С любовью, Егор и Алия
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;

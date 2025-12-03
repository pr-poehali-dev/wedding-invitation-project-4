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
      <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="floral" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
            <path d="M100,50 Q110,40 120,50 Q130,60 120,70 Q110,80 100,70 Q90,60 100,50" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary"/>
            <path d="M100,50 Q90,40 80,50 Q70,60 80,70 Q90,80 100,70" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary"/>
            <circle cx="100" cy="50" r="3" fill="currentColor" className="text-secondary"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#floral)"/>
      </svg>

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>

      <div className="absolute top-20 left-10 opacity-10">
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M60,10 Q50,30 60,40 Q70,30 60,10" className="stroke-primary" strokeWidth="2"/>
          <path d="M60,40 Q80,50 90,60 Q80,70 60,60" className="stroke-primary" strokeWidth="2"/>
          <path d="M60,60 Q70,80 60,100 Q50,80 60,60" className="stroke-primary" strokeWidth="2"/>
          <path d="M60,60 Q40,70 30,60 Q40,50 60,40" className="stroke-primary" strokeWidth="2"/>
          <circle cx="60" cy="60" r="8" className="stroke-secondary" strokeWidth="2" fill="none"/>
        </svg>
      </div>

      <div className="absolute bottom-32 right-16 opacity-10">
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50,20 Q45,30 50,35 Q55,30 50,20" className="stroke-primary" strokeWidth="2"/>
          <path d="M50,35 Q65,40 70,50 Q65,60 50,55" className="stroke-primary" strokeWidth="2"/>
          <path d="M50,55 Q55,70 50,80 Q45,70 50,55" className="stroke-primary" strokeWidth="2"/>
          <path d="M50,55 Q35,60 30,50 Q35,40 50,35" className="stroke-primary" strokeWidth="2"/>
          <circle cx="50" cy="50" r="6" className="stroke-secondary" strokeWidth="2" fill="none"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10 max-w-5xl">
        <section className="min-h-screen flex flex-col items-center justify-center text-center space-y-16 animate-fade-in py-20">
          <div className="space-y-12">
            <div className="relative">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-48 h-48 bg-primary/5 rounded-full blur-3xl"></div>
              <div className="flex items-center justify-center gap-8 mb-12 relative">
                <div className="h-[1px] w-32 bg-gradient-to-r from-transparent via-primary/40 to-primary/40"></div>
                <div className="relative">
                  <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25,10 Q20,15 20,20 Q20,25 25,30 Q30,25 30,20 Q30,15 25,10" className="fill-primary" opacity="0.8"/>
                    <path d="M25,10 Q30,15 30,20 Q30,25 25,30" className="stroke-primary" strokeWidth="1" fill="none"/>
                    <path d="M25,10 Q20,15 20,20 Q20,25 25,30" className="stroke-primary" strokeWidth="1" fill="none"/>
                    <circle cx="25" cy="18" r="2" className="fill-secondary"/>
                  </svg>
                </div>
                <div className="h-[1px] w-32 bg-gradient-to-l from-transparent via-primary/40 to-primary/40"></div>
              </div>
            </div>

            <div className="relative space-y-6">
              <h1 className="text-8xl md:text-[11rem] font-normal tracking-wider text-foreground script-font relative leading-tight">
                Егор
              </h1>
              <div className="h-[1px] w-48 bg-gradient-to-r from-transparent via-primary/30 to-transparent mx-auto"></div>
            </div>
            
            <div className="flex items-center justify-center gap-10 py-6">
              <div className="h-[1px] w-20 bg-gradient-to-r from-transparent to-primary/40"></div>
              <span className="text-5xl text-primary script-font">&</span>
              <div className="h-[1px] w-20 bg-gradient-to-l from-transparent to-primary/40"></div>
            </div>

            <div className="relative space-y-6">
              <h1 className="text-8xl md:text-[11rem] font-normal tracking-wider text-foreground script-font relative leading-tight">
                Алия
              </h1>
              <div className="h-[1px] w-48 bg-gradient-to-r from-transparent via-primary/30 to-transparent mx-auto"></div>
            </div>
          </div>

          <div className="space-y-8 mt-16">
            <p className="text-2xl md:text-3xl font-light text-muted-foreground tracking-wide italic">
              Приглашаем вас разделить с нами
            </p>
            <p className="text-3xl md:text-4xl text-foreground tracking-wide">
              особенный день нашей жизни
            </p>
          </div>

          <div className="mt-20 relative">
            <div className="absolute inset-0 bg-primary/5 rounded-[2rem] blur-3xl scale-110"></div>
            <Card className="relative p-12 md:p-16 border border-primary/20 rounded-[2rem] bg-card/95 backdrop-blur-sm shadow-xl">
              <p className="text-6xl md:text-7xl text-primary mb-3 tracking-wider">
                27.05.2026
              </p>
              <div className="h-[1px] w-40 bg-gradient-to-r from-transparent via-primary/40 to-transparent mx-auto my-8"></div>
              
              <div className="grid grid-cols-4 gap-4 md:gap-8 mt-10">
                {[
                  { value: timeLeft.days, label: 'дней' },
                  { value: timeLeft.hours, label: 'часов' },
                  { value: timeLeft.minutes, label: 'минут' },
                  { value: timeLeft.seconds, label: 'секунд' }
                ].map((item, idx) => (
                  <div key={idx} className="relative">
                    <div className="bg-background/60 rounded-xl p-5 md:p-7 border border-primary/15">
                      <div className="text-4xl md:text-5xl text-primary tabular-nums font-light">
                        {String(item.value).padStart(2, '0')}
                      </div>
                      <div className="text-xs md:text-sm text-muted-foreground mt-3 font-light italic">
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
          <div className="relative w-full">
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
            <Card className="relative p-12 md:p-20 bg-card/95 backdrop-blur-sm border border-primary/20 rounded-[2rem] shadow-xl">
              <div className="space-y-16">
                <div className="text-center space-y-8">
                  <div className="relative inline-block">
                    <Icon name="MapPin" className="text-primary" size={52} />
                  </div>
                  <h2 className="text-6xl md:text-7xl text-foreground tracking-wide">Площадка</h2>
                  <div className="h-[1px] w-40 bg-gradient-to-r from-transparent via-primary/40 to-transparent mx-auto"></div>
                  <p className="text-3xl md:text-4xl text-foreground mt-8 script-font">
                    Роща
                  </p>
                  <p className="text-xl text-muted-foreground italic">
                    Адрес: <span className="text-primary/70">(укажу позже)</span>
                  </p>
                </div>

                <div className="relative py-8">
                  <div className="absolute inset-0 flex items-center">
                    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
                  </div>
                  <div className="relative flex justify-center">
                    <svg width="40" height="40" viewBox="0 0 40 40" className="bg-background">
                      <circle cx="20" cy="20" r="3" className="fill-primary"/>
                      <circle cx="20" cy="20" r="8" className="stroke-primary/30" strokeWidth="1" fill="none"/>
                    </svg>
                  </div>
                </div>

                <div className="text-center space-y-8">
                  <div className="relative inline-block">
                    <Icon name="Shirt" className="text-primary" size={52} />
                  </div>
                  <h2 className="text-6xl md:text-7xl text-foreground tracking-wide">Дресс-код</h2>
                  <div className="h-[1px] w-40 bg-gradient-to-r from-transparent via-primary/40 to-transparent mx-auto"></div>
                  
                  <div className="flex flex-wrap justify-center gap-5 mt-10">
                    {[
                      'bg-[#722F37]',
                      'bg-[#4A1E24]',
                      'bg-[#2C1B1D]',
                      'bg-[#F5F1E8]',
                      'bg-[#6B4423]'
                    ].map((color, idx) => (
                      <div key={idx} className="relative group">
                        <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full ${color} border-2 border-primary/20 shadow-lg hover:scale-110 transition-transform cursor-pointer`}></div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-16 p-10 border border-dashed border-primary/25 rounded-2xl bg-primary/5">
                    <Icon name="ImagePlus" className="mx-auto text-primary/60 mb-4" size={44} />
                    <p className="text-xl text-muted-foreground/80 italic">Примеры образов</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <section className="min-h-screen flex flex-col items-center justify-center py-20 animate-fade-in">
          <div className="relative w-full">
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
            <Card className="relative p-12 md:p-20 bg-card/95 backdrop-blur-sm border border-primary/20 rounded-[2rem] shadow-xl">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-12">
                  <div className="text-center space-y-8">
                    <div className="relative inline-block">
                      <Icon name="ClipboardList" className="text-primary" size={52} />
                    </div>
                    <h2 className="text-6xl md:text-7xl text-foreground tracking-wide">Опрос для гостей</h2>
                    <div className="h-[1px] w-40 bg-gradient-to-r from-transparent via-primary/40 to-transparent mx-auto"></div>
                    <p className="text-muted-foreground text-xl mt-6 italic">
                      Помогите нам подготовиться к празднику
                    </p>
                  </div>

                  <div className="space-y-10">
                    <div className="space-y-4">
                      <Label htmlFor="name" className="text-2xl font-light">Ваше имя</Label>
                      <Input
                        id="name"
                        value={guestName}
                        onChange={(e) => setGuestName(e.target.value)}
                        placeholder="Введите ваше имя"
                        required
                        className="text-xl py-8 rounded-xl border border-primary/20 focus:border-primary bg-background/60"
                      />
                    </div>

                    <div className="space-y-5">
                      <Label className="text-2xl font-light">Нужен ли трансфер?</Label>
                      <RadioGroup value={needsTransfer} onValueChange={setNeedsTransfer} required>
                        <div className="relative">
                          <div className="flex items-center space-x-5 p-6 border border-primary/15 rounded-xl hover:border-primary/30 transition-all bg-background/60">
                            <RadioGroupItem value="yes" id="transfer-yes" />
                            <Label htmlFor="transfer-yes" className="cursor-pointer flex-1 text-xl font-light">
                              Да, нужен трансфер
                            </Label>
                          </div>
                        </div>
                        <div className="relative">
                          <div className="flex items-center space-x-5 p-6 border border-primary/15 rounded-xl hover:border-primary/30 transition-all bg-background/60">
                            <RadioGroupItem value="no" id="transfer-no" />
                            <Label htmlFor="transfer-no" className="cursor-pointer flex-1 text-xl font-light">
                              Нет, доберусь самостоятельно
                            </Label>
                          </div>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="space-y-5">
                      <Label className="text-2xl font-light">Какие напитки предпочитаете?</Label>
                      <div className="space-y-4">
                        {drinkOptions.map(drink => (
                          <div key={drink} className="relative">
                            <div className="flex items-center space-x-5 p-6 border border-primary/15 rounded-xl hover:border-primary/30 transition-all bg-background/60">
                              <Checkbox
                                id={drink}
                                checked={drinks.includes(drink)}
                                onCheckedChange={() => handleDrinkToggle(drink)}
                              />
                              <Label htmlFor={drink} className="cursor-pointer flex-1 text-xl font-light">
                                {drink}
                              </Label>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="relative pt-6">
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full text-2xl py-9 rounded-xl bg-primary hover:bg-primary/90 transition-all hover:scale-[1.01]"
                        disabled={!guestName || !needsTransfer}
                      >
                        Отправить ответы
                      </Button>
                    </div>
                  </div>
                </form>
              ) : (
                <div className="text-center space-y-10 py-20">
                  <div className="relative inline-block">
                    <Icon name="CheckCircle2" className="text-primary" size={90} />
                  </div>
                  <h3 className="text-5xl md:text-6xl text-foreground script-font">
                    Спасибо, {guestName}!
                  </h3>
                  <p className="text-2xl text-muted-foreground font-light italic">
                    Ваши ответы сохранены
                  </p>
                  <div className="h-[1px] w-40 bg-gradient-to-r from-transparent via-primary/40 to-transparent mx-auto mt-10"></div>
                  <p className="text-2xl text-muted-foreground mt-10 font-light">
                    Ждём вас на нашей свадьбе!
                  </p>
                </div>
              )}
            </Card>
          </div>
        </section>

        <footer className="py-20 text-center">
          <div className="space-y-8">
            <div className="flex items-center justify-center gap-8">
              <div className="h-[1px] w-32 bg-gradient-to-r from-transparent via-primary/40 to-primary/40"></div>
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20,8 Q17,12 17,15 Q17,18 20,22 Q23,18 23,15 Q23,12 20,8" className="fill-primary" opacity="0.7"/>
                <circle cx="20" cy="14" r="1.5" className="fill-secondary"/>
              </svg>
              <div className="h-[1px] w-32 bg-gradient-to-l from-transparent via-primary/40 to-primary/40"></div>
            </div>
            <p className="text-muted-foreground font-light text-xl tracking-wide italic">
              С любовью, Егор и Алия
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;

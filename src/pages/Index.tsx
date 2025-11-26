import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-abyss text-bio-green overflow-hidden relative">
      <div className="bioluminescent-particles"></div>
      <div className="water-overlay"></div>
      
      <nav className="fixed top-0 w-full z-50 bg-abyss/80 backdrop-blur-sm border-b border-bio-green/20">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img 
              src="https://cdn.poehali.dev/files/0e73d37b-f7d6-4d4b-9c5f-5dd5b25c0c6c.png" 
              alt="Abyssal Logo" 
              className="h-10 w-10 bioluminescent-glow"
            />
            <span className="text-xl font-bold tracking-wider glitch-text">ABYSSAL</span>
          </div>
          
          <div className="hidden md:flex gap-6">
            <button onClick={() => scrollToSection('info')} className="nav-link">Информация</button>
            <button onClick={() => scrollToSection('features')} className="nav-link">Особенности</button>
            <button onClick={() => scrollToSection('developers')} className="nav-link">Разработчики</button>
            <button onClick={() => scrollToSection('connect')} className="nav-link">Подключиться</button>
          </div>

          <div className="md:hidden">
            <Icon name="Menu" className="text-bio-green" />
          </div>
        </div>
      </nav>

      <section className="min-h-screen flex items-center justify-center relative pt-20">
        <div 
          className="absolute inset-0 bg-gradient-radial from-bio-green/5 to-transparent"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        ></div>
        
        <div className="text-center z-10 space-y-8 px-4">
          <div className="submersion-effect">
            <img 
              src="https://cdn.poehali.dev/files/d006a03a-69d8-47fc-ad45-3dad4689aea9.png" 
              alt="Abyssal SCP RP" 
              className="mx-auto max-w-2xl w-full bioluminescent-glow animate-float"
            />
          </div>
          
          <p className="text-2xl text-cyan-400 font-light tracking-widest terminal-text">
            SECURE. CONTAIN. SUBMERGE.
          </p>
          
          <div className="flex gap-4 justify-center flex-wrap">
            <Button 
              onClick={() => scrollToSection('connect')}
              className="corner-cut bg-bio-green/20 border-2 border-bio-green text-bio-green hover:bg-bio-green hover:text-abyss transition-all duration-300 px-8 py-6 text-lg"
            >
              <Icon name="Gamepad2" className="mr-2" />
              ИГРАТЬ СЕЙЧАС
            </Button>
            
            <Button 
              onClick={() => scrollToSection('info')}
              className="corner-cut bg-transparent border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/20 transition-all duration-300 px-8 py-6 text-lg"
            >
              <Icon name="Info" className="mr-2" />
              УЗНАТЬ БОЛЬШЕ
            </Button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={40} className="text-bio-green/50" />
        </div>
      </section>

      <section id="info" className="py-20 px-4 relative">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-12 text-center glitch-text corner-border pb-4">
            ИНФОРМАЦИЯ
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="info-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 rounded-lg bg-bio-green/10 border border-bio-green flex items-center justify-center">
                  <Icon name="Waves" className="text-bio-green" />
                </div>
                <h3 className="text-xl font-bold text-cyan-400">Подводная База</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Исследуйте глубины океана в секретной подводной базе Фонда SCP. 
                Уникальная атмосфера, вдохновленная SOMA — мрачная, напряженная, незабываемая.
              </p>
            </div>

            <div className="info-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 rounded-lg bg-bio-green/10 border border-bio-green flex items-center justify-center">
                  <Icon name="Users" className="text-bio-green" />
                </div>
                <h3 className="text-xl font-bold text-cyan-400">Ролевая Игра</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Станьте частью научного персонала, охраны или попытайтесь выжить как D-класс. 
                Каждая роль имеет свои задачи и секреты.
              </p>
            </div>

            <div className="info-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 rounded-lg bg-bio-green/10 border border-bio-green flex items-center justify-center">
                  <Icon name="Skull" className="text-bio-green" />
                </div>
                <h3 className="text-xl font-bold text-cyan-400">SCP Объекты</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Встречайтесь с уникальными подводными аномалиями. От безобидных до Keter-класса. 
                Не все, что светится в темноте — безопасно.
              </p>
            </div>

            <div className="info-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 rounded-lg bg-bio-green/10 border border-bio-green flex items-center justify-center">
                  <Icon name="Zap" className="text-bio-green" />
                </div>
                <h3 className="text-xl font-bold text-cyan-400">События</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Регулярные ивенты: прорывы сдерживания, исследовательские экспедиции, 
                атаки извне. Никогда не знаешь, что случится следующим.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-4 relative bg-gradient-to-b from-transparent via-bio-green/5 to-transparent">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center glitch-text corner-border pb-4">
            ОСОБЕННОСТИ
          </h2>

          <div className="space-y-6">
            <div className="feature-row">
              <div className="flex items-center gap-4">
                <div className="feature-icon">01</div>
                <div>
                  <h3 className="text-2xl font-bold text-bio-green mb-2">Уникальная Карта</h3>
                  <p className="text-gray-400">
                    Полностью кастомная подводная база с несколькими уровнями глубины, 
                    лабораториями и камерами содержания.
                  </p>
                </div>
              </div>
            </div>

            <div className="feature-row">
              <div className="flex items-center gap-4">
                <div className="feature-icon">02</div>
                <div>
                  <h3 className="text-2xl font-bold text-cyan-400 mb-2">Кастомный Контент</h3>
                  <p className="text-gray-400">
                    Эксклюзивные модели, звуки и текстуры. Атмосфера глубоководной базы 
                    с биолюминесцентными элементами.
                  </p>
                </div>
              </div>
            </div>

            <div className="feature-row">
              <div className="flex items-center gap-4">
                <div className="feature-icon">03</div>
                <div>
                  <h3 className="text-2xl font-bold text-bio-green mb-2">Система Прогресса</h3>
                  <p className="text-gray-400">
                    Развивайте своего персонажа, получайте доступ к новым зонам и секретам. 
                    Узнавайте правду о проекте Abyssal.
                  </p>
                </div>
              </div>
            </div>

            <div className="feature-row">
              <div className="flex items-center gap-4">
                <div className="feature-icon">04</div>
                <div>
                  <h3 className="text-2xl font-bold text-cyan-400 mb-2">Активное Комьюнити</h3>
                  <p className="text-gray-400">
                    Дружелюбное сообщество игроков и администрация. Discord сервер с обновлениями, 
                    ивентами и общением.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="developers" className="py-20 px-4 relative">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-12 text-center glitch-text corner-border pb-4">
            РАЗРАБОТЧИКИ
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="developer-card">
              <div className="h-24 w-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-bio-green to-cyan-400 flex items-center justify-center border-2 border-bio-green">
                <Icon name="User" size={40} className="text-abyss" />
              </div>
              <h3 className="text-xl font-bold text-center mb-2 text-bio-green">Lead Developer</h3>
              <p className="text-center text-gray-400 text-sm">Создатель концепции</p>
            </div>

            <div className="developer-card">
              <div className="h-24 w-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-cyan-400 to-bio-green flex items-center justify-center border-2 border-cyan-400">
                <Icon name="Code" size={40} className="text-abyss" />
              </div>
              <h3 className="text-xl font-bold text-center mb-2 text-cyan-400">Backend Developer</h3>
              <p className="text-center text-gray-400 text-sm">Архитектор системы</p>
            </div>

            <div className="developer-card">
              <div className="h-24 w-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-bio-green to-cyan-400 flex items-center justify-center border-2 border-bio-green">
                <Icon name="Palette" size={40} className="text-abyss" />
              </div>
              <h3 className="text-xl font-bold text-center mb-2 text-bio-green">Designer</h3>
              <p className="text-center text-gray-400 text-sm">Визуальная концепция</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-4">Хотите присоединиться к команде?</p>
            <Button className="corner-cut bg-transparent border-2 border-bio-green text-bio-green hover:bg-bio-green/20">
              <Icon name="UserPlus" className="mr-2" />
              Подать заявку
            </Button>
          </div>
        </div>
      </section>

      <section id="connect" className="py-20 px-4 relative">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl font-bold mb-12 text-center glitch-text corner-border pb-4">
            ПОДКЛЮЧИТЬСЯ
          </h2>

          <div className="space-y-6">
            <div className="connect-card">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <Icon name="Gamepad2" size={32} className="text-bio-green" />
                  <div>
                    <h3 className="text-2xl font-bold text-bio-green">IP Адрес Сервера</h3>
                    <p className="text-gray-400 text-sm">Скопируйте и вставьте в консоль</p>
                  </div>
                </div>
              </div>
              <div className="bg-abyss-light border border-bio-green/30 rounded p-4 flex items-center justify-between">
                <code className="text-bio-green font-mono text-lg">connect 127.0.0.1:27015</code>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="text-cyan-400 hover:text-bio-green"
                  onClick={() => navigator.clipboard.writeText('connect 127.0.0.1:27015')}
                >
                  <Icon name="Copy" className="mr-2" />
                  Копировать
                </Button>
              </div>
            </div>

            <div className="connect-card">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <Icon name="MessageCircle" size={32} className="text-cyan-400" />
                  <div>
                    <h3 className="text-2xl font-bold text-cyan-400">Discord Сервер</h3>
                    <p className="text-gray-400 text-sm">Общайтесь с игроками и следите за новостями</p>
                  </div>
                </div>
              </div>
              <Button 
                className="w-full corner-cut bg-[#5865F2] hover:bg-[#4752C4] text-white border-none text-lg py-6"
                onClick={() => window.open('https://discord.gg/abyssal', '_blank')}
              >
                <Icon name="MessageCircle" className="mr-2" />
                Присоединиться к Discord
              </Button>
            </div>
          </div>

          <div className="mt-12 text-center space-y-4">
            <p className="text-gray-400">Следите за нами в социальных сетях</p>
            <div className="flex gap-4 justify-center">
              <Button variant="ghost" size="icon" className="text-bio-green hover:text-cyan-400 hover:bg-bio-green/10">
                <Icon name="Youtube" />
              </Button>
              <Button variant="ghost" size="icon" className="text-bio-green hover:text-cyan-400 hover:bg-bio-green/10">
                <Icon name="Twitter" />
              </Button>
              <Button variant="ghost" size="icon" className="text-bio-green hover:text-cyan-400 hover:bg-bio-green/10">
                <Icon name="Globe" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-bio-green/20 py-8 px-4 bg-abyss-light">
        <div className="container mx-auto text-center">
          <p className="text-gray-500 text-sm mb-2">© 2025 Abyssal SCP RP. Все права защищены.</p>
          <p className="text-gray-600 text-xs">
            Этот сервер не аффилирован с официальным SCP Foundation Wiki
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
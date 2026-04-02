import React from 'react';
import { motion } from 'motion/react';
import { Bookmark, Calendar, ArrowRight, Brain, Heart, Compass, Star, MapPin, Phone, Clock, CheckCircle2 } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-lime-accent selection:text-stone-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream-50/80 backdrop-blur-md border-b border-cream-200/50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-lime-accent flex items-center justify-center">
            <Brain className="w-4 h-4 text-stone-900" />
          </div>
          <span className="font-heading font-semibold text-xl tracking-tight">Dra. Tatiana | Psicologia</span>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-lime-accent/20 blur-[120px]" />
        <div className="absolute bottom-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-lime-accent/10 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-cream-200 text-sm font-medium mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-lime-accent animate-pulse" />
            Atendimento Online e Presencial
          </div>
          
          <h1 className="font-heading text-5xl lg:text-7xl font-semibold leading-[1.1] tracking-tight mb-6">
            Sua saúde mental merece um novo <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-500 to-green-600">universo</span> de cuidados.
          </h1>
          
          <p className="text-lg text-stone-600 mb-8 leading-relaxed max-w-xl">
            Terapia personalizada que une ciência e empatia. Transforme sua relação consigo mesmo, supere desafios e recupere sua qualidade de vida em um ambiente seguro e acolhedor.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#agendamento" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-lime-accent hover:bg-lime-accent-hover text-stone-900 font-medium transition-all shadow-sm hover:shadow-md">
              <Calendar className="w-5 h-5" />
              Agendar Consulta
            </a>
            <a href="#servicos" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white hover:bg-cream-100 text-stone-900 font-medium transition-all border border-cream-200 shadow-sm">
              Conheça as Abordagens
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          <div className="mt-12 flex items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm border border-cream-200">
                <Brain className="w-6 h-6 text-lime-600" />
              </div>
              <div>
                <p className="font-semibold text-stone-900">Ciência</p>
                <p className="text-sm text-stone-500">Prática baseada em evidências</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm border border-cream-200">
                <Heart className="w-6 h-6 text-lime-600" />
              </div>
              <div>
                <p className="font-semibold text-stone-900">Acolhimento</p>
                <p className="text-sm text-stone-500">Espaço seguro e sem julgamentos</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative lg:ml-auto"
        >
          <div className="relative w-full max-w-md mx-auto aspect-[4/5] rounded-[2rem] overflow-hidden shadow-sm bg-cream-100 flex items-center justify-center border-2 border-dashed border-cream-200">
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white flex items-center justify-center shadow-sm">
                <span className="text-stone-400 text-sm font-medium">Foto</span>
              </div>
              <p className="text-stone-500 text-sm font-medium">Espaço para sua foto</p>
              <p className="text-stone-400 text-xs mt-1">Proporção recomendada: 4:5</p>
            </div>
          </div>
          
          {/* Floating Badge */}
          <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-cream-200 flex items-center gap-4">
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <img key={i} src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Patient" className="w-10 h-10 rounded-full border-2 border-white" referrerPolicy="no-referrer" />
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1 text-amber-400">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </div>
              <p className="text-sm font-medium text-stone-900">60+ Avaliações 5 estrelas</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="sobre" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="aspect-square rounded-[2rem] overflow-hidden bg-cream-100 flex items-center justify-center border-2 border-dashed border-cream-200">
              <div className="text-center p-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white flex items-center justify-center shadow-sm">
                  <span className="text-stone-400 text-sm font-medium">Foto</span>
                </div>
                <p className="text-stone-500 text-sm font-medium">Espaço para foto do consultório</p>
                <p className="text-stone-400 text-xs mt-1">Proporção recomendada: 1:1</p>
              </div>
            </div>
            <div className="absolute -right-8 -bottom-8 w-48 h-48 bg-lime-accent/20 rounded-full blur-3xl -z-10" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <h2 className="font-heading text-4xl lg:text-5xl font-semibold leading-tight mb-6">
              Muito além da terapia, uma nova relação com a vida.
            </h2>
            
            <div className="space-y-4 text-stone-600 text-lg mb-10">
              <p>
                Olá, sou a Tatiana. Como psicóloga clínica, meu propósito é oferecer um espaço de escuta ativa e acolhimento, onde você possa explorar suas emoções, compreender seus padrões de comportamento e encontrar caminhos para uma vida mais leve e com significado.
              </p>
              <p>
                Acredito que cada indivíduo é único, e por isso, minha abordagem é personalizada, unindo técnicas validadas cientificamente com uma profunda empatia pela sua história.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 mb-12">
              <div>
                <p className="text-4xl font-heading font-bold text-stone-900 mb-1">10+</p>
                <p className="text-stone-500 font-medium">Anos de experiência</p>
              </div>
              <div>
                <p className="text-4xl font-heading font-bold text-stone-900 mb-1">100%</p>
                <p className="text-stone-500 font-medium">Foco no seu bem-estar</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Atendimento Humanizado",
                "Sigilo Absoluto",
                "Abordagem Comprovada",
                "Ambiente Acolhedor"
              ].map((attr, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 rounded-2xl bg-cream-50 border border-cream-200">
                  <CheckCircle2 className="w-5 h-5 text-lime-600 shrink-0" />
                  <span className="font-medium text-stone-800">{attr}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    {
      icon: <Brain className="w-8 h-8 text-lime-600" />,
      title: "Terapia Individual",
      description: "Um espaço seguro para autoconhecimento, tratamento de ansiedade, depressão, estresse e outras questões emocionais. Foco no seu desenvolvimento pessoal."
    },
    {
      icon: <Heart className="w-8 h-8 text-lime-600" />,
      title: "Terapia de Casal",
      description: "Auxílio na resolução de conflitos, melhora da comunicação e fortalecimento do vínculo afetivo. Construindo relacionamentos mais saudáveis."
    },
    {
      icon: <Compass className="w-8 h-8 text-lime-600" />,
      title: "Orientação Psicológica",
      description: "Suporte focado em questões específicas e pontuais, como transição de carreira, luto, tomadas de decisão e momentos de crise."
    }
  ];

  return (
    <section id="servicos" className="py-24 bg-cream-50 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-heading text-4xl lg:text-5xl font-semibold mb-6">Como posso te ajudar hoje?</h2>
          <p className="text-lg text-stone-600">
            Ofereço diferentes modalidades de atendimento para atender às suas necessidades específicas, sempre com ética e dedicação.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white p-8 rounded-[2rem] shadow-sm border border-cream-200 hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 rounded-2xl bg-lime-accent/20 flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-heading font-semibold mb-4">{service.title}</h3>
              <p className="text-stone-600 leading-relaxed mb-8">
                {service.description}
              </p>
              <a href="#agendamento" className="inline-flex items-center gap-2 text-lime-700 font-medium hover:text-lime-800 transition-colors">
                Saber mais <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const testimonials = [
    {
      name: "Livia Barbosa",
      role: "Paciente",
      text: "Dra. Tatiana é uma excelente profissional, muito educada, simpática e empatica. Sempre pontual. Desde a primeira consulta muito acolhedora e me fez sentir à vontade. Demonstra muito conhecimento e técnica. Consultório limpo e agradável."
    },
    {
      name: "Nathalia Soares",
      role: "Paciente",
      text: "A Tati é uma ótima profissional, pessoa incrível, leve e divertida. Me ajuda a ver o mundo com mais leveza e me encoraja a ser a minha melhor versão. Super feliz com a minha evolução até aqui."
    },
    {
      name: "Manoela Mazoleni",
      role: "Paciente",
      text: "Eu mais que recomendo! A Tati é uma profissional excelente e eu indico pra todo mundo! Não troco por nada, me sinto super acolhida e segura. Ela me ajudou no momento mais difícil da minha vida e eu nunca vou esquecer. Se eu me tornei uma mulher forte, ela tem parte nisso ❤️"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-heading text-4xl lg:text-5xl font-semibold mb-6">Histórias de quem transformou a rotina.</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-cream-50 p-8 rounded-[2rem] border border-cream-200 flex flex-col"
            >
              <div className="flex items-center gap-1 text-amber-400 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-stone-700 leading-relaxed mb-8 flex-grow italic">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <div>
                  <p className="font-semibold text-stone-900">{testimonial.name}</p>
                  <p className="text-sm text-stone-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="agendamento" className="py-24 bg-stone-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-lime-accent/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-heading text-4xl lg:text-5xl font-semibold mb-6">Dê o primeiro passo para o seu bem-estar.</h2>
            <p className="text-stone-400 text-lg mb-12 max-w-md">
              Preencha o formulário abaixo para solicitar um pré-agendamento. Entrarei em contato o mais breve possível para confirmar o horário.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-lime-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Localização</h4>
                  <p className="text-stone-400">Condomínio do Centro Comercial Time Center Recreio</p>
                  <p className="text-stone-400">Av. das Américas, 15700 - Sala 137 e 138</p>
                  <p className="text-stone-400">Recreio dos Bandeirantes, Rio de Janeiro - RJ</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-lime-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Contato</h4>
                  <p className="text-stone-400">(21) 99482-4422</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-lime-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Horário de Funcionamento</h4>
                  <p className="text-stone-400">Segunda a Sexta: 08:00 às 22:00</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[2rem] p-8 lg:p-10 text-stone-900 shadow-2xl">
            <h3 className="text-2xl font-heading font-semibold mb-6">Pré-agendamento</h3>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-2">Nome Completo</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-lime-accent focus:border-transparent transition-shadow"
                  placeholder="Seu nome"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-stone-700 mb-2">Telefone / WhatsApp</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-lime-accent focus:border-transparent transition-shadow"
                    placeholder="(21) 90000-0000"
                  />
                </div>
                <div>
                  <label htmlFor="modality" className="block text-sm font-medium text-stone-700 mb-2">Modalidade</label>
                  <select 
                    id="modality" 
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-lime-accent focus:border-transparent transition-shadow bg-white"
                  >
                    <option>Presencial</option>
                    <option>Online</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-2">Mensagem (Opcional)</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-lime-accent focus:border-transparent transition-shadow resize-none"
                  placeholder="Gostaria de falar sobre..."
                />
              </div>

              <button 
                type="submit"
                className="w-full py-4 rounded-xl bg-lime-accent hover:bg-lime-accent-hover text-stone-900 font-semibold transition-colors mt-4"
              >
                Solicitar Agendamento
              </button>
              <p className="text-xs text-stone-500 text-center mt-4">
                Seus dados estão seguros e serão usados apenas para contato.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-400 py-8 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Brain className="w-5 h-5 text-lime-accent" />
          <span className="font-heading font-semibold text-white">Dra. Tatiana</span>
        </div>
        <p className="text-sm">
          © {new Date().getFullYear()} Dra. Tatiana - Psicologia. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

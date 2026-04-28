import { useState } from "react";
import { motion } from "framer-motion";
import {
  MessageCircle, ShieldCheck, Globe2, Zap, Mic, Image as ImageIcon, FileText,
  Check, ArrowRight, Sparkles, Building2, Users, Clock, Languages,
  Upload, QrCode, BarChart3, BrainCircuit, Plug, Phone, Mail, MapPin, Lock,
  BedDouble, ShoppingBag, Truck, UtensilsCrossed,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5, ease: "easeOut" },
};

const Nav = () => (
  <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
    <div className="container-tight flex h-16 items-center justify-between">
      <a href="#top" className="flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
          <span className="font-serif text-lg leading-none">s</span>
        </div>
        <span className="text-base font-medium tracking-tight">saha.team</span>
      </a>
      <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
        <a href="#sektorler" className="hover:text-foreground">Sektörler</a>
        <a href="#ozellikler" className="hover:text-foreground">Özellikler</a>
        <a href="#nasil" className="hover:text-foreground">Nasıl çalışır</a>
        <a href="#fiyatlandirma" className="hover:text-foreground">Fiyatlandırma</a>
        <a href="#sss" className="hover:text-foreground">SSS</a>
        <a href="#iletisim" className="hover:text-foreground">İletişim</a>
      </nav>
      <Button asChild size="sm" className="rounded-full">
        <a href="#iletisim">
          <MessageCircle className="h-4 w-4" /> WhatsApp'tan Dene
        </a>
      </Button>
    </div>
  </header>
);

const Pill = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
    {children}
  </span>
);

const ChatBubble = ({
  from, text, lang, source, audio,
}: { from: "user" | "bot"; text: string; lang?: string; source?: string; audio?: string }) => (
  <div className={`flex ${from === "user" ? "justify-end" : "justify-start"}`}>
    <div
      className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm shadow-soft ${
        from === "user"
          ? "rounded-br-sm bg-primary-soft text-foreground"
          : "rounded-bl-sm bg-card text-foreground"
      }`}
    >
      {audio && (
        <div className="mb-1 flex items-center gap-2 text-xs text-muted-foreground">
          <Mic className="h-3.5 w-3.5 text-primary" />
          <div className="flex h-1 flex-1 items-center gap-0.5">
            {[3,5,7,4,6,8,5,3,4,6,5,3,4,6,7,5,3].map((h, i) => (
              <span key={i} className="w-0.5 rounded-full bg-primary/60" style={{ height: `${h * 2}px` }} />
            ))}
          </div>
          <span>{audio}</span>
        </div>
      )}
      <p className="leading-relaxed whitespace-pre-line">{text}</p>
      {source && (
        <p className="mt-1.5 text-[11px] text-muted-foreground">
          Kaynak: <span className="text-primary">{source}</span>
        </p>
      )}
      {lang && (
        <p className="mt-1 text-[10px] uppercase tracking-wide text-muted-foreground/70">{lang}</p>
      )}
    </div>
  </div>
);

const Hero = () => (
  <section id="top" className="bg-hero relative overflow-hidden">
    <div className="container-tight grid items-center gap-12 py-20 md:grid-cols-2 md:py-28">
      <motion.div {...fadeUp}>
        <h1 className="text-5xl leading-[1.05] md:text-6xl">
          Sahadaki ekibinizin <br />
          <span className="italic text-primary">WhatsApp'taki</span> yardımcısı.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
          Kasiyer, resepsiyonist, kat görevlisi — prosedür ya da vardiya sorusu olduğunda müdürü aramasın.
          WhatsApp'tan yazsın, sesli mesaj atsın, kendi dilinde saniyede cevap alsın.
        </p>
        <p className="mt-3 text-sm font-medium text-foreground">
          Uygulama yok. Şifre yok. Eğitim yok.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Button asChild size="lg" className="rounded-full shadow-glow">
            <a href="#iletisim">WhatsApp'tan Hemen Dene <ArrowRight className="h-4 w-4" /></a>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full">
            <a href="#iletisim">15 Dakikalık Demo Al</a>
          </Button>
        </div>
      </motion.div>

      <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }}>
        <div className="relative mx-auto w-full max-w-md rounded-[2rem] border border-border bg-card p-3 shadow-soft">
          <div className="rounded-[1.5rem] bg-soft p-4">
            <div className="mb-3 flex items-center gap-3 border-b border-border/60 pb-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <MessageCircle className="h-4 w-4" />
              </div>
              <div>
                <p className="text-sm font-medium">saha.team Asistan</p>
                <p className="text-[11px] text-primary">çevrimiçi</p>
              </div>
            </div>
            <div className="space-y-2.5">
              <ChatBubble from="user" text="Yarınki vardiyam kaçta? 🙏" />
              <ChatBubble
                from="bot"
                text={"Merhaba Ayşe 👋\nYarın 07:30 – 16:00 sabah vardiyasındasınız.\nMola: 12:30. İyi çalışmalar!"}
                source="Vardiya-Cizelgesi.pdf"
              />
              <ChatBubble from="user" audio="0:08" text="Faturasız iade prosedürü?" />
              <ChatBubble
                from="bot"
                text={"3 adımda işlem yapılır:\n1️⃣ Müşteri kimliği alın\n2️⃣ Kasada \"İade İzni\" seçin\n3️⃣ Müdür onayını sisteme girin."}
                source="Iade-Politikasi.pdf · sf.4"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>

    <div className="border-y border-border/60 bg-card/50">
      <div className="container-tight grid grid-cols-1 gap-3 py-5 text-xs text-muted-foreground md:grid-cols-3 md:gap-x-8">
        <div className="flex items-start gap-2">
          <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
          <div>
            <p className="font-medium text-foreground">Ayda 80+ saat kazanın</p>
            <p>Müdürlerinizin bölünme süresi geri gelir.</p>
          </div>
        </div>
        <div className="flex items-start gap-2">
          <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
          <div>
            <p className="font-medium text-foreground">%99 doğru yanıt</p>
            <p>Sadece sizin dokümanlarınızdan, kaynaklı.</p>
          </div>
        </div>
        <div className="flex items-start gap-2">
          <Zap className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
          <div>
            <p className="font-medium text-foreground">15 dakikada kurulum</p>
            <p>BT ekibi gerekmez.</p>
          </div>
        </div>
      </div>
    </div>

  </section>
);

const Logos = () => null;

const Problem = () => {
  const items = [
    { icon: Clock, title: "Müdürünüz günde 40+ kez bölünüyor", desc: "Her \"kasa kapanışı nasıl?\" sorusu ortalama 6 dakikanızı alıyor. Ayda 80 saat kayıp — üstelik en kritik saatlerde: öğle servisi, kasa kapanışı, vardiya değişimi." },
    { icon: Users, title: "Ekibiniz sormaktan çekiniyor", desc: "Müdürü meşgul gören personel sormuyor — tahminle iş yapıyor. Hata oranı yükseliyor, operasyon kalitesi düşüyor." },
    { icon: Building2, title: "Yeni personel 3 haftada verimli oluyor", desc: "Oryantasyon uzun, prosedürler dağınık. Yabancı personel varsa dil duvarı bu süreyi ikiye katlıyor." },
    { icon: Languages, title: "Bilgi her yerde, hiçbir yerde", desc: "PDF'ler bulutta, prosedürler klasörde, kurallar müdürün kafasında. Sahaya ulaşan bilgi yarısından az." },
  ];
  return (
    <section className="border-t border-border bg-soft py-24">
      <div className="container-tight">
        <motion.div {...fadeUp} className="max-w-2xl">
          <h2 className="mt-4 text-4xl md:text-5xl">Sahadaki bilgi akışı <span className="italic text-primary">kopuk.</span></h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Müdürünüz cevap vermekten operasyona dönemiyor. Ekibiniz sormaktan çekinip tahminle iş yapıyor.
            Aradaki bedeli operasyon ödüyor.
          </p>
        </motion.div>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {items.map(({ icon: Icon, title, desc }, i) => (
            <motion.div key={title} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl border border-border bg-card p-7">
              <Icon className="h-5 w-5 text-primary" />
              <h3 className="mt-4 font-serif text-2xl">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyWhatsApp = () => {
  const features = [
    { i: MessageCircle, t: "Zaten herkesin telefonunda", d: "Türkiye'de %96 penetrasyon. Yeni uygulama indirmek, hesap açmak, şifre hatırlamak yok." },
    { i: Mic, t: "Sesli mesaj desteği", d: "Eldivenle, yürürken, iki iş arasında. Yazma zorunluluğu yok — sistem sesi anlıyor." },
    { i: ImageIcon, t: "Fotoğraf & belge gönderimi", d: "\"Bu ürün arızalı, ne yapayım?\" — fotoğraf atar, sistem tanır, çözüm verir." },
    { i: Globe2, t: "Çoklu dil desteği", d: "Yabancı personelle iletişim, dil duvarı olmadan. 12+ dil, metin ve ses." },
    { i: Check, t: "Okundu bildirimleri", d: "Çift mavi tik şeffaflığı. Bildirimin ulaşıp ulaşmadığını anlık takip edersiniz." },
    { i: FileText, t: "Sınırsız metin & medya", d: "160 karakter limiti yok. PDF, video, ses — hepsi tek kanaldan akar." },
  ];
  return (
    <section id="ozellikler" className="py-24">
      <div className="container-tight">
        <motion.div {...fadeUp} className="max-w-2xl">
          <h2 className="mt-4 text-4xl md:text-5xl">Ekibinizin zaten kullandığı <span className="italic text-primary">tek uygulama.</span></h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Personeliniz zaten her gün açtığı uygulamadan sorsun. Sesli mesaj, fotoğraf, kendi dili — hepsi tek yerde.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map(({ i: Icon, t, d }, i) => (
            <motion.div key={t} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl border border-border bg-card p-7">
              <Icon className="h-5 w-5 text-primary" />
              <p className="mt-4 font-serif text-xl">{t}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Solution = () => {
  const blocks = [
    { n: "01", t: "Sıfır sürtünme — sadece bir QR kod.", d: "Personel odasına asılı QR'ı okuttu, WhatsApp açıldı, ilk mesajını attı. Hesap yok, indirme yok. Yeni gelen stajyer 30 saniyede sisteme girer.", icon: QrCode },
    { n: "02", t: "Herkes kendi dilinde sorar, doğru cevabı alır.", d: "Kat görevliniz Kırgızca yazsın, garsonunuz Arapça sorsun, kasiyeriniz sesli mesaj atsın. Sistem Türkçe prosedürünüzü okur, sorana kendi dilinde yanıtlar. 12+ dil, metin ve ses.", icon: Languages },
    { n: "03", t: "Uydurma cevap yok — her yanıtın kaynağı belli.", d: "Yapay zekâ sadece sizin yüklediğiniz dokümanlardan cevap üretir. Her yanıtın altında kaynak belge ve sayfa numarası görünür. Bilmediğinde söyler, uydurmaz.", icon: ShieldCheck },
  ];
  return (
    <section className="border-t border-border bg-soft py-24">
      <div className="container-tight">
        <motion.div {...fadeUp} className="max-w-2xl">
          <h2 className="mt-4 text-4xl md:text-5xl">Tek bir WhatsApp numarası. <span className="italic text-primary">Tüm ekip hizalanır.</span></h2>
        </motion.div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {blocks.map(({ n, t, d, icon: Icon }, i) => (
            <motion.div key={n} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl border border-border bg-card p-7">
              <div className="flex items-center justify-between">
                <span className="font-serif text-3xl text-primary">{n}</span>
                <Icon className="h-5 w-5 text-muted-foreground" />
              </div>
              <h3 className="mt-4 font-serif text-2xl">{t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const LiveExamples = () => {
  const examples = [
    {
      flag: "🇹🇷", name: "Mehmet · Mağaza", role: "Kasiyer · Türkçe",
      q: "Müşteri faturasız iade istiyor, ne yapayım?",
      a: "3 adımda işlem yapabilirsin Mehmet 👇\n1️⃣ Müşterinin kimliğini al\n2️⃣ Kasada \"İade İzni\" menüsünü seç\n3️⃣ Müdür onayını sisteme gir.",
      src: "Magaza-Iade-Politikasi.pdf · sf.4",
    },
    {
      flag: "🇷🇺", name: "Olga · Resort Otel", role: "Kat Görevlisi · Русский",
      q: "(304 numaralı oda için temizlik malzemelerini nereden alacağım?)",
      audio: "0:08",
      a: "Здравствуйте Ольга 👋\nХимия для номеров 3-го этажа находится в служебной кладовой 3-А (рядом с лифтом). Код двери: 1847.",
      src: "Housekeeping-Manual-RU.pdf",
    },
    {
      flag: "🇸🇦", name: "Ahmad · Restoran", role: "Garson · العربية",
      q: "ما هي الأطباق النباتية المتوفرة اليوم؟ (Bugün vegan menüde neler var?)",
      a: "أهلاً أحمد! 🌱\nاليوم لدينا 4 أطباق نباتية:\n• فلافل بالكينوا\n• شوربة عدس\n• سلطة المتوسط\n• ريزوتو الفطر",
      src: "Gunluk-Menu-2025-04-17.pdf",
    },
  ];
  return (
    <section className="py-24">
      <div className="container-tight">
        <motion.div {...fadeUp} className="max-w-2xl">
          <h2 className="mt-4 text-4xl md:text-5xl">Ekibiniz hangi dilde sorarsa, <span className="italic text-primary">kendi dilinde cevap alsın.</span></h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">Sahanızdan gerçek diyaloglar. Sesli, yazılı, hangi dilden olursa olsun — saha.team anlıyor.</p>
        </motion.div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {examples.map((e) => (
            <div key={e.name} className="rounded-2xl border border-border bg-card p-5 shadow-soft">
              <div className="flex items-center gap-3 border-b border-border/60 pb-3">
                <span className="text-2xl">{e.flag}</span>
                <div>
                  <p className="text-sm font-medium">{e.name}</p>
                  <p className="text-xs text-muted-foreground">{e.role}</p>
                </div>
              </div>
              <div className="mt-4 space-y-2.5">
                <ChatBubble from="user" text={e.q} audio={e.audio} />
                <ChatBubble from="bot" text={e.a} source={e.src} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Dashboard = () => (
  <section className="bg-soft py-24">
    <div className="container-tight grid gap-12 md:grid-cols-2 md:items-center">
      <motion.div {...fadeUp}>
        <h2 className="mt-4 text-4xl md:text-5xl">Kontrol tamamen <span className="italic text-primary">merkezde.</span></h2>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          saha.team sahadaki ekibe destek olurken, merkez ofise ve yöneticilere paha biçilemez içgörüler sunar.
        </p>
        <div className="mt-8 space-y-5">
          {[
            { i: BarChart3, t: "Gerçek Zamanlı Tasarruf (ROI)", d: "Bu ay AI'nın kaç soru yanıtladığını ve yöneticilerinizin kaç saatini kurtardığını canlı izleyin." },
            { i: Upload, t: "Sürükle & Bırak Bilgi Bankası", d: "PDF'i panele bırakın, tüm şubeleriniz saniyeler içinde yeni kurala göre yanıt versin." },
            { i: BrainCircuit, t: "Kör Nokta Tespiti", d: "\"Bilgi Boşluğu Analizi\" ile en çok ne sorulduğunu, hangi dokümanın yetersiz olduğunu görün." },
          ].map(({ i: Icon, t, d }) => (
            <div key={t} className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <p className="font-medium">{t}</p>
                <p className="mt-1 text-sm text-muted-foreground">{d}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }}>
        <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
          <div className="flex items-center justify-between border-b border-border/60 pb-3 text-xs text-muted-foreground">
            <span>saha.team / panel</span>
            <span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-primary" /> canlı</span>
          </div>
          <div className="mt-5 grid grid-cols-2 gap-3">
            <div className="rounded-xl bg-primary-soft p-4">
              <p className="text-xs text-muted-foreground">Bu Ay Kurtarılan Saat</p>
              <p className="mt-1 font-serif text-3xl text-primary">1.247</p>
              <p className="mt-1 text-[11px] text-primary">+38%</p>
            </div>
            <div className="rounded-xl bg-secondary p-4">
              <p className="text-xs text-muted-foreground">Yanıtlanan Soru</p>
              <p className="mt-1 font-serif text-3xl">8.412</p>
              <p className="mt-1 text-[11px] text-muted-foreground">%99 doğru</p>
            </div>
          </div>
          <div className="mt-4 rounded-xl bg-secondary p-4">
            <p className="text-xs text-muted-foreground">Haftalık Etkileşim · son 7 gün</p>
            <div className="mt-3 flex h-20 items-end gap-2">
              {[40,55,38,72,90,65,80].map((h, i) => (
                <div key={i} className="flex-1 rounded-t bg-primary/70" style={{ height: `${h}%` }} />
              ))}
            </div>
            <div className="mt-2 flex justify-between text-[10px] text-muted-foreground">
              {["Pzt","Sal","Çar","Per","Cum","Cmt","Paz"].map((d) => <span key={d}>{d}</span>)}
            </div>
          </div>
          <div className="mt-3 flex items-center gap-3 rounded-xl bg-primary-soft p-3 text-sm">
            <FileText className="h-4 w-4 text-primary" />
            <span className="flex-1">Iade-Politikasi-2025.pdf</span>
            <span className="text-xs text-primary">✓ Yüklendi · 3 sn</span>
          </div>
          <div className="mt-3 rounded-xl bg-secondary p-4">
            <p className="text-xs text-muted-foreground">Bilgi Boşluğu</p>
            {[
              { l: "İade kuralları", v: 92 },
              { l: "Vardiya değişimi", v: 68 },
              { l: "Kasa açılışı", v: 34 },
            ].map((b) => (
              <div key={b.l} className="mt-2">
                <div className="flex justify-between text-xs">
                  <span>{b.l}</span><span className="text-muted-foreground">{b.v}%</span>
                </div>
                <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-background">
                  <div className="h-full bg-primary" style={{ width: `${b.v}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const Integrations = () => {
  const groups = [
    { t: "Bulut depolama", items: ["Google Drive","OneDrive","Dropbox","SharePoint"] },
    { t: "POS & ERP", items: ["Logo","Mikro","Netsis","SAP"] },
    { t: "İK & Operasyon", items: ["BordroPlus","Workday","Excel","Google Sheets"] },
  ];
  return (
    <section id="entegrasyonlar" className="py-24">
      <div className="container-tight">
        <motion.div {...fadeUp} className="max-w-2xl">
          <h2 className="mt-4 text-4xl md:text-5xl">Mevcut sisteminize <span className="italic text-primary">bağlanır.</span></h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">POS'unuzdan vardiya, İK sisteminizden izin, bulut depodan prosedür çekelim. Tek kurulum, sürekli güncel.</p>
        </motion.div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {groups.map((g) => (
            <div key={g.t} className="rounded-2xl border border-border bg-card p-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Plug className="h-4 w-4 text-primary" /> {g.t}
              </div>
              <div className="mt-4 grid grid-cols-2 gap-2">
                {g.items.map((i) => (
                  <div key={i} className="rounded-lg bg-secondary px-3 py-2 text-sm">{i}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-muted-foreground">
          Sisteminiz listede yok mu? <a href="#iletisim" className="text-primary underline-offset-4 hover:underline">Bizimle konuşun</a> — özel entegrasyon 2 haftada hazır.
        </p>
      </div>
    </section>
  );
};

const Sectors = () => {
  const items = [
    { icon: BedDouble, t: "Konaklama", d: "Resepsiyon, kat hizmetleri ve F&B ekipleri için vardiya, prosedür ve misafir kuralları." },
    { icon: ShoppingBag, t: "Perakende", d: "Mağaza, kasiyer ve depo personeli için iade, kampanya ve kasa süreçleri." },
    { icon: Truck, t: "Lojistik & Kargo", d: "Şoför, depo ve dağıtım ekipleri için rota, teslimat ve hasar prosedürleri." },
    { icon: UtensilsCrossed, t: "Restoran & F&B", d: "Garson, mutfak ve şube müdürleri için reçete, alerjen ve servis standartları." },
  ];
  return (
    <section id="sektorler" className="py-24">
      <div className="container-tight">
        <motion.div {...fadeUp} className="max-w-2xl">
          <h2 className="mt-4 text-4xl md:text-5xl">Masabaşı olmayan <span className="italic text-primary">her ekip için.</span></h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">Sahada çalışan ekibinizin olduğu her yerde işe yarar.</p>
        </motion.div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, t, d }, i) => (
            <motion.div key={t} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl border border-border bg-card p-7 transition-colors hover:border-primary/40">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-serif text-2xl">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    { n: "1", t: "Yükleyin", d: "Prosedürlerinizi, kılavuzlarınızı, yönetmeliklerinizi panele sürükleyin. PDF, Word, Excel, Google Drive — hepsi çalışır.", icon: Upload },
    { n: "2", t: "Bağlayın", d: "Size atanan kurumsal WhatsApp numarasını personelle paylaşın. QR kodunu ekip odasına asın.", icon: MessageCircle },
    { n: "3", t: "Rahatlayın", d: "İlk sorudan itibaren sistem aktif. Yöneticileriniz operasyona döner, bilgi akışını asistan yönetir.", icon: Sparkles },
  ];
  return (
    <section id="nasil" className="bg-soft py-24">
      <div className="container-tight">
        <motion.div {...fadeUp} className="max-w-2xl">
          <h2 className="mt-4 text-4xl md:text-5xl">Kurulum 15 dakika. <span className="italic text-primary">BT ekibi gerekmez.</span></h2>
        </motion.div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {steps.map(({ n, t, d, icon: Icon }, i) => (
            <motion.div key={n} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl border border-border bg-card p-7">
              <div className="flex items-center justify-between">
                <span className="font-serif text-5xl text-primary/40">{n}</span>
                <Icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 font-serif text-2xl">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Security = () => {
  const items = [
    { i: ShieldCheck, t: "KVKK uyumlu", d: "Türkiye'de konumlu sunucularda işleme, yasal saklama süreleri." },
    { i: Globe2, t: "GDPR uyumlu", d: "AB personeli veya müşterisi olan zincirler için tam uyum." },
    { i: BrainCircuit, t: "Veriler AI eğitiminde kullanılmaz", d: "Dokümanlarınız sadece sizin asistanınızı çalıştırır. Anthropic/OpenAI eğitimine gitmez." },
    { i: FileText, t: "Şeffaf silme hakkı", d: "İstediğinizde tüm verileriniz 24 saat içinde silinir, silme sertifikası gönderilir." },
    { i: Check, t: "ISO 27001 hazırlık aşamasında", d: "2026 üçüncü çeyrekte sertifikasyon hedefimiz." },
    { i: Lock, t: "Şifreli veri iletimi", d: "Uçtan uca TLS, veri tabanında AES-256." },
  ];
  return (
    <section className="border-t border-border bg-soft py-24">
      <div className="container-tight">
        <motion.div {...fadeUp} className="max-w-2xl">
          <h2 className="mt-4 text-4xl md:text-5xl">Verileriniz <span className="italic text-primary">sizin elinizde kalır.</span></h2>
        </motion.div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map(({ i: Icon, t, d }, i) => (
            <motion.div key={t} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl border border-border bg-card p-7">
              <Icon className="h-5 w-5 text-primary" />
              <p className="mt-4 font-serif text-xl">{t}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const plans = [
    {
      name: "Başlangıç",
      tag: "Tek şubeli işletmeler için",
      price: "₺7.400",
      unit: "/ şube / ay + KDV",
      features: [
        "1 şube, sınırsız personel",
        "Sınırsız doküman yüklemesi",
        "Aylık 800 konuşma",
        "12+ dil, sesli mesaj desteği",
        "Temel kullanım paneli",
        "Bulut depolama entegrasyonu",
        "E-posta destek (iş saatleri)",
      ],
      cta: "14 Gün Ücretsiz Başla",
      highlight: false,
    },
    {
      name: "Büyüme",
      tag: "2-15 şubeli zincirler için",
      price: "₺6.400",
      unit: "/ şube / ay + KDV",
      addon: "Başlangıç paketine ek olarak:",
      features: [
        "Aylık 1.500 konuşma / şube",
        "ERP entegrasyonu (Logo, Mikro, Netsis, SAP)",
        "Bilgi boşluğu analizi + trend raporu",
        "Rol bazlı erişim (şube / bölge / merkez)",
        "Özel onboarding seansı",
        "WhatsApp öncelikli destek (4 saat SLA)",
      ],
      cta: "14 Gün Ücretsiz Başla",
      highlight: true,
    },
    {
      name: "Profesyonel",
      tag: "16-50 şubeli grup ve zincirler için",
      price: "₺5.400",
      unit: "/ şube / ay + KDV",
      addon: "Büyüme paketine ek olarak:",
      features: [
        "Aylık 2.000 konuşma / şube",
        "Özel eğitim ve canlı destek",
        "Gelişmiş raporlama ve özel dashboard",
        "Haftalık iş değerlendirme görüşmesi",
        "Garantili SLA (2 saat yanıt)",
      ],
      cta: "14 Gün Ücretsiz Başla",
      highlight: false,
    },
    {
      name: "Kurumsal",
      tag: "50+ şube ve özel ihtiyaçlar için",
      price: "Teklif",
      unit: "üzerine",
      addon: "Profesyonel paketine ek olarak:",
      features: [
        "Sınırsız şube & konuşma (fair use)",
        "Özel entegrasyon (2 hafta teslim)",
        "Ayrılmış müşteri başarı yöneticisi",
        "API erişimi & webhook",
        "KVKK veri işleme sözleşmesi",
        "Özel güvenlik denetimi",
        "White-label seçeneği",
        "%99.9 uptime SLA",
      ],
      cta: "Satış Ekibiyle Görüş",
      highlight: false,
    },
  ];
  return (
    <section id="fiyatlandirma" className="py-24">
      <div className="container-tight">
        <motion.div {...fadeUp} className="max-w-2xl">
          <h2 className="mt-4 text-4xl md:text-5xl">Şube sayınıza göre <span className="italic text-primary">şeffaf fiyat.</span></h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Personel sınırı yok. Gizli ücret yok. İstediğiniz zaman iptal.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {plans.map((p, i) => (
            <motion.div key={p.name} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`relative flex flex-col rounded-2xl border p-7 ${
                p.highlight ? "border-primary bg-card shadow-glow" : "border-border bg-card"
              }`}>
              {p.highlight && (
                <span className="absolute -top-3 left-7 rounded-full bg-primary px-3 py-1 text-[11px] font-medium text-primary-foreground">
                  En popüler
                </span>
              )}
              <p className="font-serif text-2xl">{p.name}</p>
              <p className="mt-1 text-xs text-muted-foreground">{p.tag}</p>
              <div className="mt-5 flex items-baseline gap-1">
                <span className="font-serif text-4xl">{p.price}</span>
                <span className="text-xs text-muted-foreground">{p.unit}</span>
              </div>
              {p.addon && <p className="mt-4 text-xs font-medium text-foreground">{p.addon}</p>}
              <ul className="mt-4 flex-1 space-y-2 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="mt-6 w-full rounded-full" variant={p.highlight ? "default" : "outline"}>
                <a href="#iletisim">{p.cta}</a>
              </Button>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 grid gap-5 rounded-2xl border border-border bg-soft p-7 text-sm md:grid-cols-3">
          <div>
            <p className="font-medium">Yıllık ödeme</p>
            <p className="mt-1 text-muted-foreground">%15 indirim</p>
          </div>
          <div>
            <p className="font-medium">Aylık konuşma aşımı</p>
            <p className="mt-1 text-muted-foreground">Konuşma başına ₺4.50</p>
          </div>
          <div>
            <p className="font-medium">Sözleşme süresi</p>
            <p className="mt-1 text-muted-foreground">İstediğiniz zaman iptal</p>
          </div>
        </div>

        <div className="mt-5 grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-6">
            <p className="font-medium">Konuşma nedir?</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Bir personelin bir oturumda sorduğu soru ve aldığı cevap = 1 konuşma.
              30 dakika içinde aynı kişiden yeni soru → aynı konuşma sayılır.
              Çoğu şube aylık limitinin yarısını bile kullanmaz.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <p className="font-medium">Neden bu fiyat seviyesi?</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Her şubeniz için kurumsal seviyede AI altyapısı, KVKK uyumlu veri işleme,
              yerel ERP entegrasyonu ve özel destek sağlıyoruz. Jenerik chatbot fiyatına
              gerçek altyapı kurulmaz — aradaki fark kalite farkıdır.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const faqs = [
    { q: "Yapay zekâ uydurma cevap verir mi?", a: "Hayır. Sistem sadece sizin yüklediğiniz dokümanlardan yanıt üretir. Dokümanda cevap yoksa \"bu soru için yetkiliye başvurun\" der. Her yanıt kaynak sayfaya bağlıdır, personel kaynağı görüp doğrulayabilir." },
    { q: "Personelim WhatsApp dışında bir şey indirmek zorunda mı?", a: "Hayır. Tek gereken WhatsApp — zaten telefonunda. Hesap açma, şifre, eğitim yok." },
    { q: "Verilerim güvende mi? AI eğitiminde kullanılır mı?", a: "Veriler Türkiye'deki sunucularda şifreli saklanır (AES-256). KVKK ve GDPR uyumlu. Dokümanlarınız asla AI model eğitiminde kullanılmaz — sadece sizin asistanınızı çalıştırır. Silme talebiniz 24 saat içinde karşılanır." },
    { q: "Kaç dil destekliyor?", a: "12+ dil: Türkçe, İngilizce, Rusça, Arapça, Almanca, Fransızca, İspanyolca, Farsça, Ukraynaca, Özbekçe, Kırgızca, Gürcüce. Sesli mesaj da aynı dillerde işlenir." },
    { q: "Kurulum ne kadar sürer? BT ekibim yok.", a: "15 dakika. Paneldeki sihirbaz adım adım ilerletir. Takıldığınızda WhatsApp destek hattı açık — 30 dakikada kurulumu biz de yapabiliriz." },
    { q: "Hangi dosya formatları destekleniyor?", a: "PDF, Word (.docx), Excel (.xlsx), PowerPoint (.pptx), Google Docs, düz metin. Fotoğraflı/taranmış belgeleri OCR ile işler. Tek seferde yüzlerce doküman yükleyebilirsiniz." },
    { q: "Sözleşme süresi ne kadar?", a: "Aylık veya yıllık. İstediğiniz zaman iptal — uzun taahhüt yok. Yıllık ödemede %15 indirim var." },
    { q: "AI yanlış cevap verirse ne olur?", a: "Her cevabın altında \"Bu cevap faydalı mıydı?\" butonu var. Olumsuz geri bildirim panelinize düşer, asistanı siz iyileştirirsiniz. Ayrıca tüm \"bilinmeyen sorular\" liste halinde raporlanır." },
    { q: "Rakiplerinizden farkınız ne?", a: "Türkiye'deki saha ekiplerine özel tasarlandı. Yerli ERP entegrasyonları (Logo, Mikro, Netsis) hazır. Türkçe sesli mesaj işleme yerel aksan ve terminolojiye optimize. KVKK mevzuatıyla uyumlu, Türkiye sunuculu altyapı. Jenerik WhatsApp bot platformlarında bunlar yok." },
    { q: "Müdürüm izindeyken sistem nasıl çalışır?", a: "Asistan 7/24 aktif. Personel gece vardiyasında, tatilde, hafta sonunda — her zaman cevap alır. Müdür izindeyken panelde \"bilinmeyen sorular\" listesi oluşur, döndüğünde bakar." },
    { q: "Mevcut prosedürlerim dağınık, önce düzenlemem mi gerekli?", a: "Hayır. Sistem karışık, eksik, tekrarlı dokümanlarla bile çalışır. \"Bilgi boşluğu analizi\" size hangi prosedürlerin eksik, hangisinin güncellenmesi gerektiğini söyler. İlk ayda dokümanlarınız da düzene girer." },
  ];
  return (
    <section id="sss" className="py-24">
      <div className="container-tight max-w-3xl">
        <motion.div {...fadeUp}>
          <h2 className="mt-4 text-4xl md:text-5xl">Aklınızdaki soruların <span className="italic text-primary">cevapları burada.</span></h2>
        </motion.div>
        <Accordion type="single" collapsible className="mt-10 space-y-2">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="rounded-2xl border border-border bg-card px-5">
              <AccordionTrigger className="text-left text-base font-medium hover:no-underline">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

const Contact = () => {
  const [sent, setSent] = useState(false);
  return (
    <section id="iletisim" className="bg-soft py-24">
      <div className="container-tight grid gap-10 md:grid-cols-2">
        <motion.div {...fadeUp}>
          <h2 className="mt-4 text-4xl md:text-5xl">Konuşalım — <span className="italic text-primary">ister WhatsApp, ister form.</span></h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">2 iş günü içinde dönüyoruz. Acilse WhatsApp daha hızlı.</p>

          <div className="mt-8 space-y-4 text-sm">
            <div className="flex items-center gap-3"><MessageCircle className="h-4 w-4 text-primary" /> <span>WhatsApp · +90 555 555 55 55</span></div>
            <div className="flex items-center gap-3"><Phone className="h-4 w-4 text-primary" /> <span>+90 212 555 00 00</span></div>
            <div className="flex items-center gap-3"><Mail className="h-4 w-4 text-primary" /> <span>merhaba@saha.team</span></div>
            <div className="flex items-center gap-3"><MapPin className="h-4 w-4 text-primary" /> <span>Maslak No.1 Plaza, Kat 15 — Sarıyer / İstanbul</span></div>
          </div>
          <p className="mt-6 text-xs text-muted-foreground">
            Pzt – Cum · 09:00 – 19:00 · WhatsApp asistanımız 7/24 aktif
          </p>
        </motion.div>

        <motion.form
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.1 }}
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="rounded-2xl border border-border bg-card p-7 shadow-soft"
        >
          <div className="space-y-4">
            <div>
              <label className="text-xs text-muted-foreground">Ad Soyad</label>
              <Input required placeholder="Ayşe Yılmaz" className="mt-1" />
            </div>
            <div>
              <label className="text-xs text-muted-foreground">E-posta</label>
              <Input required type="email" placeholder="ayse@sirket.com" className="mt-1" />
            </div>
            <div>
              <label className="text-xs text-muted-foreground">Şirket</label>
              <Input placeholder="Örn. Lara Resort" className="mt-1" />
            </div>
            <div>
              <label className="text-xs text-muted-foreground">Mesaj</label>
              <Textarea
                rows={4}
                placeholder="Kaç şubeniz var, hangi sektördesiniz, en çok hangi sorun zamanınızı alıyor?"
                className="mt-1"
              />
            </div>
            <Button type="submit" size="lg" className="w-full rounded-full">
              {sent ? "Teşekkürler ✓ 2 iş günü içinde döneceğiz" : "Mesajı Gönder"}
            </Button>
            <p className="text-[11px] text-muted-foreground">
              Form bilgileriniz KVKK kapsamında işlenir, üçüncü taraflarla paylaşılmaz.
            </p>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

const FinalCTA = () => (
  <section className="py-24">
    <div className="container-tight">
      <div className="rounded-3xl border border-border bg-primary p-12 text-center text-primary-foreground shadow-glow md:p-16">
        <h2 className="font-serif text-4xl md:text-5xl">
          Sahanızdaki ekibe bugün <span className="italic">WhatsApp'tan bir asistan</span> verin.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/80">
          Bir sonraki vardiyada müdürünüz operasyona dönsün, ekibiniz sorularını WhatsApp'tan saha.team'e sorsun. Kurulum 15 dakika.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg" variant="secondary" className="rounded-full">
            <a href="#iletisim">WhatsApp'tan şimdi dene <ArrowRight className="h-4 w-4" /></a>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary">
            <a href="#iletisim">15 dakikalık görüşme</a>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="border-t border-border bg-card py-12">
    <div className="container-tight grid gap-10 md:grid-cols-4">
      <div className="md:col-span-2">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <span className="font-serif text-lg leading-none">s</span>
          </div>
          <span className="text-base font-medium">saha.team</span>
        </div>
        <p className="mt-4 max-w-md text-sm text-muted-foreground">
          Konaklama, perakende, restoran ve lojistik için WhatsApp tabanlı yapay zekâ asistanı.
          Sahadaki ekibinizi kurum bilgisiyle güçlendirir.
        </p>
        <p className="mt-4 text-xs text-muted-foreground">
          Maslak No.1 Plaza, Sarıyer / İstanbul<br />
          merhaba@saha.team · +90 212 555 00 00
        </p>
      </div>
      <div>
        <p className="text-sm font-medium">Ürün</p>
        <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
          <li><a href="#sektorler" className="hover:text-foreground">Sektörler</a></li>
          <li><a href="#ozellikler" className="hover:text-foreground">Özellikler</a></li>
          <li><a href="#fiyatlandirma" className="hover:text-foreground">Fiyatlandırma</a></li>
          <li><a href="#nasil" className="hover:text-foreground">Nasıl Çalışır</a></li>
        </ul>
      </div>
      <div>
        <p className="text-sm font-medium">Şirket</p>
        <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
          <li><a href="#iletisim" className="hover:text-foreground">İletişim</a></li>
          <li><a href="#sss" className="hover:text-foreground">SSS</a></li>
          <li><a href="#" className="hover:text-foreground">KVKK</a></li>
          <li><a href="#" className="hover:text-foreground">Gizlilik</a></li>
        </ul>
      </div>
    </div>
    <div className="container-tight mt-10 border-t border-border pt-6 text-xs text-muted-foreground">
      <p>© 2026 saha.team · Tüm hakları saklıdır.</p>
    </div>
  </footer>
);

const Index = () => (
  <main className="min-h-screen bg-background">
    <Nav />
    <Hero />
    <Problem />
    <Solution />
    <Sectors />
    <WhyWhatsApp />
    <LiveExamples />
    <Dashboard />
    <Security />
    <HowItWorks />
    <Integrations />
    <Pricing />
    <FAQ />
    <FinalCTA />
    <Contact />
    <Footer />
  </main>
);

export default Index;

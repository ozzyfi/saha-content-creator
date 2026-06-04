import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  BedDouble,
  BrainCircuit,
  Camera,
  Check,
  ClipboardList,
  Clock,
  Database,
  FileText,
  Globe2,
  Image as ImageIcon,
  Languages,
  Leaf,
  Lock,
  Mail,
  MapPin,
  MessageCircle,
  Mic,
  
  Plug,
  QrCode,
  Search,
  ShieldCheck,
  ShoppingBag,
  Truck,
  Upload,
  Users,
  UtensilsCrossed,
  Wrench,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5, ease: "easeOut" },
};

const menuItems = [
  ["Nasıl çalışır", "#nasil"],
  ["Özellikler", "#ozellikler"],
  ["Sektörler", "#sektorler"],
];

const Nav = () => (
  <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
    <div className="container-tight flex h-16 items-center justify-between gap-4">
      <a href="#top" className="flex items-center gap-2">
        <img src="/logo-full.png" alt="saha.team" className="h-9 w-auto" />
      </a>
      <nav className="hidden items-center gap-5 text-sm text-muted-foreground lg:flex">
        {menuItems.map(([label, href]) => (
          <a key={label} href={href} className="hover:text-foreground">{label}</a>
        ))}
      </nav>
      <div className="flex items-center gap-2">
        <Button asChild size="sm" variant="outline" className="hidden rounded-full sm:inline-flex">
          <a href="#iletisim">Demo Al</a>
        </Button>
        <Button asChild size="sm" className="rounded-full">
          <a href="https://wa.me/358415773392?text=Merhaba%2C%20saha.team%27i%20denemek%20istiyorum."><MessageCircle className="h-4 w-4" /> WhatsApp'tan Dene</a>
        </Button>
      </div>
    </div>
  </header>
);

const SectionIntro = ({ eyebrow, title, children }: { eyebrow?: string; title: React.ReactNode; children?: React.ReactNode }) => (
  <motion.div {...fadeUp} className="max-w-3xl">
    {eyebrow && <p className="text-sm font-medium text-primary">{eyebrow}</p>}
    <h2 className="mt-3 text-4xl leading-tight md:text-5xl">{title}</h2>
    {children && <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{children}</p>}
  </motion.div>
);

const ChatBubble = ({ from, name, text, source }: { from: "user" | "bot"; name?: string; text: string; source?: string }) => (
  <div className={`flex ${from === "user" ? "justify-end" : "justify-start"}`}>
    <div className={`max-w-[86%] rounded-xl px-3 py-2 text-xs shadow-soft ${from === "user" ? "rounded-br-sm bg-primary-soft text-foreground" : "rounded-bl-sm bg-card text-foreground"}`}>
      {name && <p className="mb-1 text-xs font-medium text-primary">{name}</p>}
      <p className="whitespace-pre-line leading-relaxed">{text}</p>
      {source && <p className="mt-2 text-[11px] text-muted-foreground">Kaynak: <span className="text-primary">{source}</span></p>}
    </div>
  </div>
);

const FlowCard = () => (
  <div className="mt-3 rounded-xl border border-border bg-card p-3 shadow-soft">
    <p className="text-xs font-medium text-muted-foreground">Otomatik akış</p>
    <div className="mt-2 grid grid-cols-2 gap-2 text-[11px]">
      {[
        [MessageCircle, "WhatsApp mesajı"],
        [BrainCircuit, "Anlamlandırma"],
        [Database, "CRM kaydı"],
        [BarChart3, "Yönetici içgörüsü"],
      ].map(([Icon, label], index) => (
        <div key={label as string} className="relative rounded-lg bg-secondary p-2">
          <Icon className="h-3.5 w-3.5 text-primary" />
          <p className="mt-1 font-medium leading-tight">{label as string}</p>
          {index < 3 && index !== 1 && <ArrowRight className="absolute -right-2 top-1/2 h-3 w-3 -translate-y-1/2 text-primary" />}
        </div>
      ))}
    </div>
  </div>
);

const Hero = () => (
  <section id="top" className="relative overflow-hidden bg-hero">
    <div className="container-tight grid items-center gap-10 py-14 md:grid-cols-[1.05fr_0.95fr] md:py-20">
      <motion.div {...fadeUp}>
        <h1 className="text-5xl leading-[1.05] md:text-6xl">Saha ekibinizin WhatsApp’taki yardımcısı.</h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
          Saha ekibiniz WhatsApp’tan yazar, konuşur, fotoğraf ya da doküman gönderir. saha.team doğru cevabı verir, gelen bilgiyi anlamlandırır, ilgili kayda işler ve şirketiniz için kalıcı saha hafızası oluşturur.
        </p>
        <p className="mt-4 text-base font-medium text-foreground">Uygulama yok. Şifre yok. Eğitim yok.</p>
        <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted-foreground">QR kodu okutun, WhatsApp'tan mesaj gönderin — başka bir adım yok.</p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Button asChild size="lg" className="rounded-full shadow-glow">
            <a href="https://wa.me/358415773392?text=Merhaba%2C%20saha.team%27i%20denemek%20istiyorum.">WhatsApp'tan Dene <ArrowRight className="h-4 w-4" /></a>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full">
            <a href="#iletisim">15 Dakikalık Demo Al</a>
          </Button>
        </div>
        <p className="mt-6 max-w-xl text-sm font-medium leading-relaxed text-foreground">
          Soru cevaplar · Bildirimi kayıt eder · CRM'e işler · Kör noktaları gösterir
        </p>
      </motion.div>

      <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }}>
        <div className="relative mx-auto max-w-lg rounded-3xl border border-border bg-card p-2 shadow-soft">
          <div className="rounded-[1.25rem] bg-soft p-3">
            <div className="mb-3 flex items-center gap-2 border-b border-border/60 pb-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <MessageCircle className="h-4 w-4" />
              </div>
              <div>
                <p className="text-xs font-medium">saha.team Asistan</p>
                <p className="text-[11px] text-primary">çevrimiçi</p>
              </div>
            </div>
            <div className="space-y-2">
              <ChatBubble from="user" name="Ayşe · Mağaza" text="Müşteri faturasız iade istiyor, ne yapayım?" />
              <ChatBubble from="bot" name="saha.team" text={'3 adımda ilerleyebilirsin:\n1. Kimliği al\n2. “İade İzni” menüsünü seç\n3. Müdür onayını gir\n\nBu konu bugün 7. kez soruldu; panelde eğitim ihtiyacı olarak işaretlendi.'} source="İade Politikası.pdf · sf.4" />
              <ChatBubble from="user" name="Ahmet · Teknik Servis" text="304 numaralı odada klima tekrar arızalandı. Fotoğrafı ekledim." />
              <ChatBubble from="bot" name="saha.team" text={'Kayıt oluşturuldu.\nOlay: Tekrarlayan arıza\nLokasyon: Oda 304\nÖncelik: Yüksek\n\nBakım ekibine görev açıldı.'} />
            </div>
            <FlowCard />
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const Metrics = () => {
  const metrics = [
    ["Aylık 80+ saat", "Müdürün tekrar eden prosedür sorularından kurtarılan zamanı — ekip ve sektöre göre değişir."],
    ["%100 kaynaklı yanıt", "Cevaplar yalnızca sizin dokümanlarınızdan gelir. Uydurma yok, genel bilgi yok."],
    ["Aynı gün aktif", "Dokümanlarınızı yükleyin, WhatsApp numaranızı ekleyin; asistan kullanıma hazır."],
    ["CRM'e otomatik kayıt", "Sahadan gelen not, fotoğraf ve bildirim ilgili kayda otomatik işlenir."],
  ];
  return (
    <section className="border-y border-border bg-card/60">
      <div className="container-tight py-10">
        <p className="text-xl font-medium">Sahadaki bilgi artık kaybolmaz.</p>
        <div className="mt-6 grid gap-5 md:grid-cols-4">
          {metrics.map(([title, desc]) => (
            <div key={title} className="rounded-2xl bg-secondary p-5">
              <p className="font-serif text-3xl text-primary">{title}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Problem = () => {
  const problems = [
    [Clock, "Müdürler sürekli bölünür", "Aynı prosedür soruları tekrar tekrar gelir. Müdürler operasyon yönetmek yerine cevap vermekle uğraşır."],
    [Users, "Personel bazen sormaz, tahmin eder", "Müdürü meşgul gören çalışan soru sormaktan çekinir. Yanlış işlem ve operasyon hatası oluşur."],
    [Database, "CRM ve sistemler eksik kalır", "Sahadan gelen bilgi sisteme işlenmediği için müşteri, ekipman, üretici veya şube geçmişi eksik görünür."],
    [BrainCircuit, "Geçmiş bilgi kişilere bağlı kalır", "Personel değiştiğinde saha hafızası da gider. Yeni gelen çalışan geçmişi bilmez."],
    [BarChart3, "Merkez ofis sahayı geç görür", "Tekrar eden arızalar, sık sorulan prosedürler ve eğitim ihtiyaçları geç fark edilir."],
    [MessageCircle, "WhatsApp grupları kontrol dışı", "Mağaza grubu, servis grubu, bölge grubu... Kritik bilgi dağınık mesajlar arasında kayboluyor. Aranmıyor, sisteme taşınmıyor, analiz edilemiyor."],
  ];
  return (
    <section className="bg-soft py-24">
      <div className="container-tight">
        <SectionIntro title={<>Sahada her gün kritik bilgi oluşuyor. Ama çoğu WhatsApp’ta kayboluyor.</>}>
          Müşteri şikâyeti, arıza bildirimi, stok problemi, kalite uyarısı, fotoğraf ve sesli mesaj — büyük çoğunluğu WhatsApp gruplarında ya da kişisel telefonlarda kalır. Sisteme girmez, aranmaz, analiz edilemez.
        </SectionIntro>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {problems.map(([Icon, title, desc], i) => (
            <motion.div key={title as string} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.05 }} className="rounded-2xl border border-border bg-card p-7">
              <Icon className="h-5 w-5 text-primary" />
              <h3 className="mt-4 font-serif text-2xl">{title as string}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc as string}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Solution = () => (
  <section className="border-t border-border py-24">
    <div className="container-tight grid gap-12 md:grid-cols-2 md:items-center">
      <SectionIntro title={<>saha.team, WhatsApp konuşmalarını şirket hafızasına dönüştürür.</>}>
        saha.team sadece soru-cevap veren bir bot değildir. Mesajı, sesli notu, fotoğrafı veya dokümanı anlar; gerektiğinde doğru cevabı verir, kayıt oluşturur, CRM’e işler ve yöneticiyi uyarır.
      </SectionIntro>
      <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
        <div className="space-y-4">
          {[
            [MessageCircle, "WhatsApp’ta başlayan bilgi kaybolmaz."],
            [BrainCircuit, "Mesaj anlamlandırılır ve operasyon verisine dönüşür."],
            [Database, "Müşteri, şube, ekipman veya iş emrine bağlanır."],
            [BarChart3, "Merkez panelde aranabilir, raporlanabilir hafıza oluşur."],
          ].map(([Icon, text]) => (
            <div key={text as string} className="flex items-start gap-4 rounded-xl bg-secondary p-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary"><Icon className="h-5 w-5" /></div>
              <p className="text-sm leading-relaxed">{text as string}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

const HowItWorks = () => {
  const steps = [
    [MessageCircle, "WhatsApp’tan yazar, konuşur, fotoğraf ya da doküman gönderir", "Saha çalışanı yeni uygulama indirmez, hesap açmaz, şifre hatırlamaz. Zaten kullandığı WhatsApp’tan mesaj atar."],
    [BrainCircuit, "saha.team mesajı anlar", "Soru, arıza bildirimi, müşteri şikâyeti, stok problemi, servis kaydı, fotoğraf veya doküman ayrıştırılır."],
    [ShieldCheck, "Doğru cevabı verir", "Prosedür, vardiya, ürün, servis veya bakım sorularında şirket dokümanlarınızdan kısa ve kaynaklı cevap üretir."],
    [Database, "Gelen bilgiyi dataya çevirir", "Olay türü, lokasyon, ekipman, aciliyet, tekrar durumu ve önerilen aksiyon gibi alanlar oluşur."],
    [ClipboardList, "İlgili kayda işler", "Bilgi müşteri, şube, oda, ekipman, üretici, araç, iş emri, CRM, ERP veya Google Sheets kaydına bağlanır."],
    [BarChart3, "Yöneticiye hafıza ve içgörü sunar", "En çok sorulan konular, tekrar eden arızalar, eksik dokümanlar ve eğitim ihtiyaçları canlı görünür."],
  ];
  return (
    <section id="nasil" className="bg-soft py-24">
      <div className="container-tight">
        <SectionIntro title={<>WhatsApp mesajı, birkaç saniye içinde aksiyona dönüşür.</>} />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {steps.map(([Icon, title, desc], i) => (
            <motion.div key={title as string} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.05 }} className="rounded-2xl border border-border bg-card p-7">
              <div className="flex items-center justify-between">
                <span className="font-serif text-5xl text-primary/70">{i + 1}</span>
                <Icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 font-serif text-2xl">{title as string}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc as string}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProductModules = () => {
  const modules = [
    [MessageCircle, "WhatsApp AI Asistanı", "Ekibiniz soru sorar, sesli mesaj atar, fotoğraf gönderir veya doküman paylaşır; saha.team doğru cevabı veya kaydı oluşturur."],
    [FileText, "Kaynaklı Bilgi Asistanı", "PDF, Word, Excel, Drive, SharePoint ve prosedür dokümanlarından sade, kaynaklı cevaplar verir."],
    [BrainCircuit, "Saha Hafızası", "Her müşteri, şube, oda, ekipman, üretici, araç veya operasyon noktası için geçmiş oluşturur."],
    [Database, "Bilgiyi Dataya Çevirme", "Doğal konuşmayı olay türü, lokasyon, müşteri, aciliyet, tekrar durumu ve görev durumuna dönüştürür."],
    [Plug, "CRM ve Operasyon Entegrasyonu", "CRM’e not ekler, ERP’ye olay gönderir, bakım sistemine görev açar veya Google Sheets günceller."],
    [Search, "Bilgi Boşluğu Analizi", "Hangi prosedürün sık sorulduğunu, hangi dokümanın yetersiz olduğunu ve eğitim ihtiyacını gösterir."],
    [Languages, "Çok Dil ve Sesli Mesaj", "Saha ekibi yürürken konuşabilir; sistem sesi yazıya çevirir, anlamlandırır ve kullanıcının dilinde cevap verir."],
    [Camera, "Fotoğraf ve Doküman Anlama", "Hasarlı ürün, arıza, servis formu, teslimat belgesi veya kalite problemini ilgili kayda bağlar."],
  ];
  return (
    <section id="ozellikler" className="py-24">
      <div className="container-tight">
        <SectionIntro title={<>Chatbot değil, sahadan gelen bilgiyi işleyen operasyon katmanı.</>}>
          saha.team, WhatsApp’taki konuşmayı şirketinizin sistemlerine ve hafızasına bağlayan modüllerle çalışır.
        </SectionIntro>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {modules.map(([Icon, title, desc], i) => (
            <motion.div key={title as string} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.04 }} className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-soft text-primary"><Icon className="h-5 w-5" /></div>
              <h3 className="mt-5 font-serif text-xl">{title as string}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc as string}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Sectors = () => {
  const sectors = [
    [BedDouble, "Otel ve Konaklama", "Resepsiyon, kat hizmetleri, teknik servis ve F&B ekipleri için oda arızası, misafir şikâyeti, lost & found ve vardiya takibi."],
    [ShoppingBag, "Perakende", "Mağaza, kasa, depo ve bölge ekipleri için iade prosedürü, stok farkı, hasarlı ürün ve müşteri şikâyeti kaydı."],
    [Wrench, "Teknik Servis ve Bakım", "Teknisyenler için arıza bildirimi, fotoğraflı servis kaydı, iş emri güncelleme ve tekrar eden problem analizi."],
    [Leaf, "Tarım ve Gıda", "Üretici ziyaret notu, kalite uyarısı, numune alma, sözleşme geçmişi ve bölgesel saha raporları."],
    [Truck, "Lojistik ve Kargo", "Şoför, depo ve dağıtım ekipleri için teslimat sorunu, araç arızası, rota problemi ve hasarlı paket bildirimi."],
    [UtensilsCrossed, "Restoran ve F&B", "Garson, mutfak ve şube ekipleri için alerjen bilgisi, günlük menü, reçete, servis standardı ve vardiya soruları."],
  ];
  return (
    <section id="sektorler" className="bg-soft py-24">
      <div className="container-tight">
        <SectionIntro title={<>Masabaşı olmayan her ekip için saha hafızası.</>}>
          Otel, perakende, servis, tarım, lojistik ve restoran operasyonlarında bilgi WhatsApp’tan doğar; saha.team onu kayda dönüştürür.
        </SectionIntro>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {sectors.map(([Icon, title, desc], i) => (
            <motion.div key={title as string} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.05 }} className="rounded-2xl border border-border bg-card p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-soft text-primary"><Icon className="h-5 w-5" /></div>
              <h3 className="mt-5 font-serif text-2xl">{title as string}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc as string}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyWhatsApp = () => (
  <section className="py-24">
    <div className="container-tight grid gap-12 md:grid-cols-2 md:items-center">
      <SectionIntro title={<>Çünkü saha ekipleri zaten orada.</>}>
        Yeni uygulama indirtmek, hesap açtırmak ve eğitim vermek kullanımı düşürür. saha.team ile QR kod okutulur, WhatsApp açılır, çalışan mesajını gönderir ve cevabını alır.
      </SectionIntro>
      <motion.div {...fadeUp} className="grid gap-4">
        {[
          [QrCode, "QR kod okutulur"],
          [MessageCircle, "Çalışan WhatsApp’tan mesajını gönderir"],
          [Mic, "Sesli not, fotoğraf veya doküman paylaşır"],
          [Check, "Cevabını alır, bildirimi kayda dönüşür"],
        ].map(([Icon, text]) => (
          <div key={text as string} className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5">
            <Icon className="h-5 w-5 text-primary" />
            <p className="font-medium">{text as string}</p>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

const Dashboard = () => (
  <section className="bg-soft py-24">
    <div className="container-tight grid gap-12 md:grid-cols-2 md:items-center">
      <SectionIntro title={<>Kullanım sahada, kontrol merkezde.</>}>
        saha.team paneli; yanıtlanan soruları, CRM’e işlenen notları, açılan görevleri, tekrar eden problemleri, eksik dokümanları ve kurtarılan yönetici zamanını görünür hale getirir.
      </SectionIntro>
      <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }} className="rounded-2xl border border-border bg-card p-5 shadow-soft">
        <div className="flex items-center justify-between border-b border-border/60 pb-3 text-xs text-muted-foreground">
          <span>saha.team / merkez panel</span>
          <span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-primary" /> canlı</span>
        </div>
        <div className="mt-5 grid grid-cols-2 gap-3">
          <div className="rounded-xl bg-primary-soft p-4"><p className="text-xs text-muted-foreground">Bu ay yanıtlanan soru</p><p className="mt-1 font-serif text-3xl text-primary">8.412</p></div>
          <div className="rounded-xl bg-secondary p-4"><p className="text-xs text-muted-foreground">CRM’e işlenen not</p><p className="mt-1 font-serif text-3xl">2.184</p></div>
          <div className="rounded-xl bg-secondary p-4"><p className="text-xs text-muted-foreground">Açılan görev</p><p className="mt-1 font-serif text-3xl">431</p></div>
          <div className="rounded-xl bg-primary-soft p-4"><p className="text-xs text-muted-foreground">Kurtarılan saat</p><p className="mt-1 font-serif text-3xl text-primary">1.247</p></div>
        </div>
        <div className="mt-4 rounded-xl bg-secondary p-4">
          <p className="text-xs text-muted-foreground">Bilgi boşluğu analizi</p>
          {[["İade prosedürü", 92], ["Kasa kapanışı", 68], ["Klima arızaları", 54]].map(([label, value]) => (
            <div key={label as string} className="mt-3">
              <div className="flex justify-between text-xs"><span>{label as string}</span><span className="text-muted-foreground">{value as number} kez</span></div>
              <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-background"><div className="h-full bg-primary" style={{ width: `${value}%` }} /></div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

const Integrations = () => {
  const groups = [
    ["Bilgi kaynakları", ["PDF", "Word", "Excel", "Google Drive", "OneDrive", "Dropbox", "SharePoint", "Google Sheets"]],
    ["Operasyon sistemleri", ["CRM", "ERP", "İK sistemi", "Vardiya sistemi", "Bakım / servis", "Ticket", "POS", "Kalite sistemi"]],
    ["Türkiye’de yaygın sistemler", ["Logo", "Mikro", "Netsis", "SAP", "Google Workspace", "Microsoft 365", "API", "Webhook"]],
  ];
  return (
    <section id="entegrasyonlar" className="py-24">
      <div className="container-tight">
        <SectionIntro title={<>Mevcut sistemlerinizle çalışır.</>}>
          saha.team yeni bir karmaşa yaratmaz. Kullandığınız sistemlerin üzerine akıllı bir saha katmanı olarak oturur.
        </SectionIntro>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {groups.map(([title, items]) => (
            <div key={title as string} className="rounded-2xl border border-border bg-card p-6">
              <div className="flex items-center gap-2 text-sm font-medium"><Plug className="h-4 w-4 text-primary" /> {title as string}</div>
              <div className="mt-4 grid grid-cols-2 gap-2">
                {(items as string[]).map((item) => <div key={item} className="rounded-lg bg-secondary px-3 py-2 text-sm">{item}</div>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Security = () => {
  const items = ["KVKK uyumlu veri işleme", "GDPR uyumlu mimari", "Verileriniz AI eğitiminde kullanılmaz", "Rol bazlı erişim", "Şube, bölge ve merkez yetkilendirmesi", "Güvenli veri iletimi", "Veri şifreleme", "Silme hakkı", "İşlem kayıtları", "Kurumsal veri işleme sözleşmesi", "Veri işleme Türkiye ve AB altyapısında", "Asgari veri toplama prensibi"];
  return (
    <section className="border-t border-border bg-soft py-24">
      <div className="container-tight">
        <SectionIntro title={<>Verileriniz sizin kontrolünüzde kalır.</>}>
          Dokümanlarınız, mesajlarınız ve saha verileriniz sadece sizin asistanınızı çalıştırmak için kullanılır.
        </SectionIntro>
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {items.map((item) => (
            <div key={item} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 text-sm">
              <Lock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ValueAndDifference = () => (
  <section className="py-24">
    <div className="container-tight grid gap-12 lg:grid-cols-2">
      <SectionIntro title={<>Müdürünüz cevap vermek yerine operasyon yönetsin.</>}>
        saha.team ile müdürler daha az bölünür, personel doğru cevabı hızlı alır, saha notları otomatik kayda dönüşür, CRM güncel kalır ve tekrar eden problemler erken görünür.
      </SectionIntro>
      <motion.div {...fadeUp} className="rounded-2xl border border-border bg-card p-7 shadow-soft">
        <h3 className="font-serif text-3xl">Rakiplerden farkımız</h3>
        <div className="mt-6 space-y-4">
          {[
            ["Chatbot değil, saha hafızası", "Soru, not, fotoğraf ve sesli mesajı operasyon verisine dönüştürür."],
            ["CRM değil, sahadan CRM’e köprü", "Sahadaki doğal konuşmayı ilgili müşteri, ekipman veya şube kaydına işler."],
            ["Doküman arama değil, aksiyon sistemi", "Gerektiğinde kayıt oluşturur, görev açar, rapora ekler ve yöneticiyi uyarır."],
            ["Yeni uygulama değil", "Personeliniz zaten kullandığı WhatsApp üzerinden çalışır."],
          ].map(([title, desc]) => (
            <div key={title} className="border-b border-border/60 pb-4 last:border-0 last:pb-0">
              <p className="font-medium">{title}</p>
              <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

const Pricing = () => {
  const plans = [
    ["Başlangıç", "Tek lokasyonlu ekipler veya ilk pilot kullanım için.", ["WhatsApp AI asistanı", "Şirket dokümanlarından kaynaklı cevap", "Fotoğraf, sesli not ve bildirim alma", "Temel kullanım paneli", "Hızlı kurulum"], "Pilot Başlat", false],
    ["Büyüme", "2–15 lokasyonlu operasyonlar için.", ["Başlangıç kapsamının tamamı", "CRM / Google Sheets entegrasyonu", "Saha notlarını yapılandırılmış veriye çevirme", "Bilgi boşluğu analizi", "Şube / bölge / merkez görünümü", "Onboarding desteği"], "Fiyat Teklifi Al", true],
    ["Kurumsal", "Çok lokasyonlu ve özel entegrasyon ihtiyacı olan şirketler için.", ["Özel CRM / ERP / ticket entegrasyonları", "API / webhook erişimi", "Gelişmiş yetkilendirme", "SLA ve güvenlik süreçleri", "KVKK uyumlu veri işleme sözleşmesi", "Müşteri başarı desteği"], "Kurumsal Demo Al", false],
  ];
  return (
    <section id="fiyatlandirma" className="bg-soft py-24">
      <div className="container-tight">
        <SectionIntro title={<>Operasyonunuza göre sade fiyatlandırma.</>}>
          saha.team; lokasyon sayısı, aylık WhatsApp kullanım hacmi, doküman sayısı, entegrasyon ihtiyacı ve güvenlik gereksinimlerine göre fiyatlandırılır. Personel sayısını değil, operasyon yapınızı esas alırız.
        </SectionIntro>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {plans.map(([name, tag, features, cta, highlight], i) => (
            <motion.div key={name as string} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.05 }} className={`relative flex flex-col rounded-2xl border p-7 ${highlight ? "border-primary bg-card shadow-glow" : "border-border bg-card"}`}>
              {highlight && <span className="absolute -top-3 left-7 rounded-full bg-primary px-3 py-1 text-[11px] font-medium text-primary-foreground">En popüler</span>}
              <p className="font-serif text-2xl">{name as string}</p>
              <p className="mt-1 text-xs text-muted-foreground">{tag as string}</p>
              <ul className="mt-5 flex-1 space-y-2 text-sm">
                {(features as string[]).map((feature) => <li key={feature} className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" /><span className="text-muted-foreground">{feature}</span></li>)}
              </ul>
              <Button asChild className="mt-6 w-full rounded-full" variant={highlight ? "default" : "outline"}><a href="#iletisim">{cta as string}</a></Button>
            </motion.div>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-muted-foreground">
          Lokasyon başına aylık fiyatlandırma. İlk görüşmede operasyon yapınıza göre teklif hazırlıyoruz.
        </p>
      </div>
    </section>
  );
};

const FAQ = () => {
  const faqs = [
    ["saha.team sadece soru-cevap botu mu?", "Hayır. Personelin sorularını yanıtlar ama asıl değeri sahadan gelen bilgiyi yapılandırılmış veriye çevirmesidir. Sesli not, fotoğraf, şikâyet, arıza veya saha bildirimi ilgili kayda işlenebilir."],
    ["Personel yeni uygulama indirmek zorunda mı?", "Hayır. saha.team WhatsApp üzerinden çalışır. Personel QR kodu okutur veya kurumsal WhatsApp numarasına mesaj atar."],
    ["WhatsApp’tan sesli mesaj gönderebilir mi?", "Evet. saha.team sesli mesajı yazıya çevirir, anlamlandırır ve gereken cevabı ya da kaydı oluşturur."],
    ["Fotoğraf veya doküman gönderebilir mi?", "Evet. Hasarlı ürün, arıza, servis formu, teslimat belgesi, saha problemi veya kalite sorunu ilgili kayıtla ilişkilendirilebilir."],
    ["CRM’e bilgi ekleyebilir mi?", "Evet. Gelen mesajlar CRM, ERP, bakım sistemi, Google Sheets veya özel operasyon sistemlerinize aktarılabilir."],
    ["Yanıtlar nereden geliyor?", "Yanıtlar sizin yüklediğiniz dokümanlardan, bağlı sistemlerden ve izin verdiğiniz veri kaynaklarından gelir. Her yanıtta kaynak gösterilebilir."],
    ["AI yanlış cevap verirse ne olur?", "saha.team cevaplarını sizin dokümanlarınıza dayandırır. Emin olmadığı durumda uydurmak yerine bilgiye erişemediğini söyler."],
    ["Hangi sektörlerde kullanılır?", "Otel, perakende, restoran, teknik servis, tarım-gıda, lojistik, depo, tesis yönetimi, güvenlik, temizlik ve saha satış ekiplerinde kullanılabilir."],
    ["Verilerimiz AI eğitiminde kullanılır mı?", "Hayır. Şirket dokümanlarınız, mesajlarınız ve operasyon verileriniz model eğitimi için kullanılmaz."],
    ["Mevcut dokümanlarımız dağınık. Önce düzenlememiz gerekir mi?", "Hayır. PDF, Word, Excel, Google Drive veya SharePoint üzerindeki mevcut dokümanlarınızla başlanabilir."],
    ["WhatsApp Business API nedir, ayrıca hesap açmam gerekiyor mu?", "saha.team kurumsal WhatsApp üzerinden çalıştığı için WhatsApp Business API bağlantısı gereklidir. Bu tek seferlik bir kurulum adımıdır ve Meta'nın onay sürecini (1–3 iş günü) birlikte yürütüyoruz. Mevcut bir iş telefonu numaranız varsa aynı numarayı kullanabilirsiniz."],
    ["Aylık ve yıllık plan farkı nedir, taahhüt var mı?", "Tüm planlar aylık faturalandırılır, herhangi bir taahhüt yoktur. Yıllık ödemeyi tercih ederseniz Başlangıç, Büyüme ve Profesyonel planlarında %15 indirim uygulanır."],
    ["Kurulum ne kadar sürer?", "WhatsApp Business API bağlantısı, Meta'nın onay sürecini gerektirdiğinden 1–3 iş günü sürer. Bu süreci sizinle birlikte yürütüyor, gerekli adımlarda rehberlik ediyoruz. API bağlantısı tamamlandıktan sonra asistan kurulumu genellikle aynı gün içinde yapılabilir."],
    ["Hangi dilleri destekler?", "saha.team çok dilli ekiplerde kullanılabilir. Personel kendi dilinde soru sorabilir ve kendi dilinde yanıt alabilir."],
  ];
  return (
    <section id="sss" className="py-24">
      <div className="container-tight max-w-3xl">
        <SectionIntro title={<>Aklınızdaki soruların cevapları burada.</>} />
        <Accordion type="single" collapsible className="mt-10 space-y-2">
          {faqs.map(([q, a], i) => (
            <AccordionItem key={q} value={`item-${i}`} className="rounded-2xl border border-border bg-card px-5">
              <AccordionTrigger className="text-left text-base font-medium hover:no-underline">{q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

const FinalCTA = () => (
  <section className="py-24">
    <div className="container-tight">
      <div className="rounded-3xl border border-border bg-primary p-10 text-center text-primary-foreground shadow-glow md:p-16">
        <h2 className="font-serif text-4xl md:text-5xl">Sahadaki bilgi artık WhatsApp’ta kaybolmasın.</h2>
        <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/80">
          Ekibiniz zaten WhatsApp'ta. saha.team ile o mesajlar artık kaybolmuyor — doğru cevabı alıyor, kayda dönüşüyor ve şirketinizin hafızasına ekleniyor.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg" variant="secondary" className="rounded-full"><a href="https://wa.me/358415773392?text=Merhaba%2C%20saha.team%27i%20denemek%20istiyorum.">WhatsApp'tan Dene <ArrowRight className="h-4 w-4" /></a></Button>
          <Button asChild size="lg" variant="outline" className="rounded-full border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary"><a href="#iletisim">15 Dakikalık Demo Al</a></Button>
        </div>
      </div>
    </div>
  </section>
);

const Contact = () => {
  const [sent, setSent] = useState(false);
  return (
    <section id="iletisim" className="bg-soft py-24">
      <div className="container-tight grid gap-10 md:grid-cols-2">
        <motion.div {...fadeUp}>
          <SectionIntro title={<>Demo planlayalım.</>}>
            Saha ekibinizin WhatsApp akışını, dokümanlarınızı ve mevcut sistemlerinizi 15 dakikada birlikte değerlendirelim.
          </SectionIntro>
          <div className="mt-8 space-y-4 text-sm">
            <div className="flex items-center gap-3"><Mail className="h-4 w-4 text-primary" /> <span>hi@saha.team</span></div>
            <div className="flex items-center gap-3"><MapPin className="h-4 w-4 text-primary" /> <span>Teknopark İstanbul, Pendik / İstanbul</span></div>
          </div>
        </motion.div>
        <motion.form {...fadeUp} transition={{ duration: 0.5, delay: 0.1 }} onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="rounded-2xl border border-border bg-card p-7 shadow-soft">
          <div className="space-y-4">
            <div><label className="text-xs text-muted-foreground">Ad Soyad</label><Input required placeholder="Ayşe Yılmaz" className="mt-1" /></div>
            <div><label className="text-xs text-muted-foreground">E-posta</label><Input required type="email" placeholder="ayse@sirket.com" className="mt-1" /></div>
            <div><label className="text-xs text-muted-foreground">Şirket</label><Input placeholder="Örn. Lara Resort" className="mt-1" /></div>
            <div>
              <label className="text-xs text-muted-foreground">Kaç lokasyonunuz var?</label>
              <Select>
                <SelectTrigger className="mt-1"><SelectValue placeholder="Seçin" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 lokasyon</SelectItem>
                  <SelectItem value="2-5">2–5 lokasyon</SelectItem>
                  <SelectItem value="6-15">6–15 lokasyon</SelectItem>
                  <SelectItem value="16-50">16–50 lokasyon</SelectItem>
                  <SelectItem value="50+">50+ lokasyon</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-xs text-muted-foreground">Sektörünüz</label>
              <Select>
                <SelectTrigger className="mt-1"><SelectValue placeholder="Seçin" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="otel">Otel / Konaklama</SelectItem>
                  <SelectItem value="perakende">Perakende / Mağaza</SelectItem>
                  <SelectItem value="teknik-servis">Teknik Servis / Bakım</SelectItem>
                  <SelectItem value="tarim">Tarım / Gıda</SelectItem>
                  <SelectItem value="lojistik">Lojistik / Kargo</SelectItem>
                  <SelectItem value="restoran">Restoran / F&B</SelectItem>
                  <SelectItem value="diger">Diğer</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div><label className="text-xs text-muted-foreground">Mesaj</label><Textarea rows={4} placeholder="Kaç lokasyonunuz var, hangi sistemleri kullanıyorsunuz?" className="mt-1" /></div>
            <Button type="submit" size="lg" className="w-full rounded-full">{sent ? "Teşekkürler ✓ En kısa sürede döneceğiz" : "Demo Talep Et"}</Button>
            <p className="text-[11px] text-muted-foreground">Form bilgileriniz KVKK kapsamında işlenir, üçüncü taraflarla paylaşılmaz.</p>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="border-t border-border bg-card py-12">
    <div className="container-tight grid gap-10 md:grid-cols-4">
      <div className="md:col-span-2">
        <div>
          <img src="/logo-full.png" alt="saha.team" className="h-9 w-auto" />
        </div>
        <p className="mt-4 max-w-md text-sm text-muted-foreground">Masabaşı olmayan ekipler için WhatsApp tabanlı operasyon hafızası.</p>
        <p className="mt-4 text-xs text-muted-foreground">hi@saha.team<br />Teknopark İstanbul, Pendik / İstanbul</p>
      </div>
      <div>
        <p className="text-sm font-medium">Menü</p>
        <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
          {menuItems.map(([label, href]) => <li key={label}><a href={href} className="hover:text-foreground">{label}</a></li>)}
        </ul>
      </div>
      <div>
        <p className="text-sm font-medium">Yasal</p>
        <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
          {["KVKK Aydınlatma Metni", "Gizlilik Politikası", "Kullanım Şartları", "Veri İşleme Sözleşmesi"].map((item) => <li key={item}><a href="#" className="hover:text-foreground">{item}</a></li>)}
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
    <Metrics />
    <Problem />
    <Solution />
    <HowItWorks />
    <ProductModules />
    <Sectors />
    <WhyWhatsApp />
    <Dashboard />
    <Integrations />
    <Security />
    <ValueAndDifference />
    <Pricing />
    <FAQ />
    <FinalCTA />
    <Contact />
    <Footer />
  </main>
);

export default Index;

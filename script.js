const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.lang = "id-ID";
const btn = document.querySelector("#listen-btn");

btn.addEventListener("click", function () {
  function speak(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "id-ID";
    window.speechSynthesis.speak(utterance);
  }

  function handleCommand(command) {
  console.log("Perintah dikenali:", command);

  const sites = [
    // 🔹 Sosial Media
    { keyword: ["buka facebook"], url: "https://www.facebook.com", msg: "Membuka Facebook..." },
    { keyword: ["buka instagram"], url: "https://www.instagram.com", msg: "Membuka Instagram..." },
    { keyword: ["buka whatsapp"], url: "https://web.whatsapp.com", msg: "Membuka WhatsApp Web..." },
    { keyword: ["buka twitter", "buka x"], url: "https://www.twitter.com", msg: "Membuka Twitter..." },
    { keyword: ["buka tiktok"], url: "https://www.tiktok.com", msg: "Membuka TikTok..." },
    { keyword: ["buka telegram"], url: "https://web.telegram.org", msg: "Membuka Telegram..." },

    // 🔹 Hiburan & Streaming
    { keyword: ["buka youtube"], url: "https://www.youtube.com", msg: "Membuka YouTube..." },
    { keyword: ["buka netflix"], url: "https://www.netflix.com", msg: "Membuka Netflix..." },
    { keyword: ["buka vidio"], url: "https://www.vidio.com", msg: "Membuka Vidio..." },
    { keyword: ["buka disney"], url: "https://www.disneyplus.com", msg: "Membuka Disney+..." },
    { keyword: ["buka spotify"], url: "https://open.spotify.com", msg: "Membuka Spotify..." },

    // 🔹 Belanja Online
    { keyword: ["buka tokopedia"], url: "https://www.tokopedia.com", msg: "Membuka Tokopedia..." },
    { keyword: ["buka shopee"], url: "https://shopee.co.id", msg: "Membuka Shopee..." },
    { keyword: ["buka lazada"], url: "https://www.lazada.co.id", msg: "Membuka Lazada..." },
    { keyword: ["buka bukalapak"], url: "https://www.bukalapak.com", msg: "Membuka Bukalapak..." },
    { keyword: ["buka blibli"], url: "https://www.blibli.com", msg: "Membuka Blibli..." },
    { keyword: ["buka aliexpress"], url: "https://www.aliexpress.com", msg: "Membuka AliExpress..." },

    // 🔹 Navigasi & Transportasi
    { keyword: ["buka google maps"], url: "https://www.google.com/maps", msg: "Membuka Google Maps..." },
    { keyword: ["buka gojek"], url: "https://www.gojek.com", msg: "Membuka Gojek..." },
    { keyword: ["buka grab"], url: "https://www.grab.com/id", msg: "Membuka Grab..." },
    { keyword: ["cek jadwal kereta", "buka kai"], url: "https://kai.id", msg: "Membuka situs KAI..." },
    { keyword: ["cek krl"], url: "https://krl.co.id", msg: "Membuka jadwal KRL..." },

    // 🔹 Pendidikan & Belajar
    { keyword: ["buka ruangguru"], url: "https://www.ruangguru.com", msg: "Membuka Ruangguru..." },
    { keyword: ["buka zenius"], url: "https://www.zenius.net", msg: "Membuka Zenius..." },
    { keyword: ["buka quipper"], url: "https://www.quipper.com", msg: "Membuka Quipper..." },
    { keyword: ["buka edmodo"], url: "https://new.edmodo.com", msg: "Membuka Edmodo..." },

    // 🔹 Pemerintahan & Layanan Publik
    { keyword: ["buka prakerja"], url: "https://www.prakerja.go.id", msg: "Membuka Kartu Prakerja..." },
    { keyword: ["buka pajak"], url: "https://djponline.pajak.go.id", msg: "Membuka layanan pajak online..." },
    { keyword: ["buka bpjs"], url: "https://www.bpjs-kesehatan.go.id", msg: "Membuka BPJS Kesehatan..." },

    // 🔹 Berita & Informasi
    { keyword: ["buka detik"], url: "https://www.detik.com", msg: "Membuka Detik.com..." },
    { keyword: ["buka kompas"], url: "https://www.kompas.com", msg: "Membuka Kompas..." },
    { keyword: ["buka cnn indonesia"], url: "https://www.cnnindonesia.com", msg: "Membuka CNN Indonesia..." },
    { keyword: ["buka tempo"], url: "https://www.tempo.co", msg: "Membuka Tempo..." },

    // 🔹 Produktivitas
    { keyword: ["buka gmail"], url: "https://mail.google.com", msg: "Membuka Gmail..." },
    { keyword: ["buka google drive"], url: "https://drive.google.com", msg: "Membuka Google Drive..." },
    { keyword: ["buka google docs"], url: "https://docs.google.com", msg: "Membuka Google Docs..." },
    { keyword: ["buka google kalender"], url: "https://calendar.google.com", msg: "Membuka Google Kalender..." },

    // 🔹 Keuangan
    { keyword: ["buka bri mobile"], url: "https://ib.bri.co.id", msg: "Membuka BRImo..." },
    { keyword: ["buka bca mobile"], url: "https://klikbca.com", msg: "Membuka KlikBCA..." },
    { keyword: ["buka ovo"], url: "https://www.ovo.id", msg: "Membuka OVO..." },
    { keyword: ["buka dana"], url: "https://www.dana.id", msg: "Membuka DANA..." },
    { keyword: ["buka linkaja"], url: "https://www.linkaja.id", msg: "Membuka LinkAja..." },
  ];

  const site = sites.find(entry => entry.keyword.some(k => command.includes(k)));
  if (site) {
    speak(site.msg);
    window.open(site.url, "_blank");
    return;
  }

  // 🔎 Penanganan Perintah Umum Pencarian
  if (command.startsWith("cari")) {
    const query = command.replace(/^cari\s*/i, "").trim();
    if (query.length > 0) {
      speak("Mencari di Google untuk " + query);
      window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, "_blank");
    } else {
      speak("Apa yang ingin Anda cari?");
    }
    return;
  }

  // 🔸 Jika tidak dikenali
  speak("Maaf, saya belum mengenali perintah itu.");
}


  speak("Halo, bagaimana saya bisa membantu Anda?");
  setTimeout(() => {
    btn.innerHTML = "Mendengarkan...👂";
    btn.classList.add("mendengarkan");
    recognition.start();
  }, 2500);

  recognition.onresult = (event) => {
    const command = event.results[0][0].transcript.toLowerCase();
    handleCommand(command);
  };

  recognition.onend = () => {
    btn.innerHTML = "Mulai Mendengarkan";
    btn.classList.remove("mendengarkan");
  };
});

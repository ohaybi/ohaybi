const generateMeta = () => {
  const head = document.getElementsByTagName("head");

  const baseUrl = "https://ohaybi.github.io";
  head.innerHTML = `
      <!-- Meta HTML -->
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Hi, i'm Abdillah Mufti, UI designer based in Indonesia." />
      <meta name="keywords" content="UI/UX, UI, User Interface, Design, Web Design, Portfolio, Freebies, Free Design, 3D Illustration, 3D Icon, Indonesia" />
      <meta name="author" content="Abdillah Mufti" />
  
      <!-- Open Graph -->
      <meta property="og:title" content="Abdillah Mufti ― User Interface Designer" />
      <meta property="og:description" content="Hi, i'm Abdillah Mufti, UI designer based in Indonesia." />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="${baseUrl}/mufti-web-cover.png" />
      <link rel="canonical" href="${baseUrl}" />
  
      <!-- Twitter -->
      <meta name="twitter:title" content="Abdillah Mufti ― User Interface Designer" />
      <meta name="twitter:description" content="Hi, i'm Abdillah Mufti, UI designer based in Indonesia." />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@ohaybi" />
      <meta name="twitter:creator" content="@ohaybi" />
      <meta name="twitter:image" content="${baseUrl}/mufti-web-cover.png" />
      <meta name="twitter:domain" content="${baseUrl}" />
  
      <!-- Favicon -->
      <link rel="apple-touch-icon" sizes="180x180" href="icon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="icon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="icon/favicon-16x16.png" />
      <link rel="manifest" href="icon/site.webmanifest" />
  
      <!-- Global site tag (gtag.js) - Google Analytics -->
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-D59RC053B5"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag() {
          dataLayer.push(arguments);
        }
        gtag("js", new Date());
  
        gtag("config", "G-D59RC053B5");
      </script>
        `;
};

export default generateMeta;

export default {
  async fetch(request) {
    const url = new URL(request.url);

    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>Love &amp; War</title>

  <meta property="og:title" content="Love &amp; War">
  <meta property="og:description" content="">
  <meta property="og:image" content="https://www.google.com/share.google?q=DPjYV2FQxwc38KCll">
  <meta property="og:url" content="${url.href}">
  <meta property="og:type" content="website">
</head>
<body>
  <h1>Love &amp; War</h1>
</body>
</html>`;

    return new Response(html, {
      status: 200,
      headers: {
        "Content-Type": "text/html; charset=UTF-8",
        "Cache-Control": "no-store"
      }
    });
  }
};


export async function GET(request: Request) {

   const reqUrl = new URL(request.url);

   // Access the query parameters
   const keyword = reqUrl.searchParams.get('keyword') || 'default_keyword';
   const page = reqUrl.searchParams.get('page') || '1';
   const type = reqUrl.searchParams.get('type') || 'trademark';

   const url = `https://pdki-indonesia.dgip.go.id/api/search?keyword=${keyword}&page=${page}&type=${type}`;

   const headers = {
      'Accept':'application/json, text/plain, */*',
      'Accept-Language':'en-GB,en-US;q=0.9,en;q=0.8,id;q=0.7',
      'Connection':'keep-alive',
      'Cookie':'_gid=GA1.3.1352320915.1704746761; _ga_MNWJE57F8M=GS1.1.1704746760.1.1.1704746769.0.0.0; _ga=GA1.1.459025809.1704746760',
      'DNT':'1',
      'Sec-Fetch-Dest':'empty',
      'Sec-Fetch-Mode':'cors',
      'Sec-Fetch-Site':'same-origin',
      'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      'pdki-signature':'PDKI/6f31289e86032fa0c96f240a1097d20765f2e83dc050cc06ded357769048c539f26bbb644e5e18f3fc8641f019412364631b9a608ed11e9778295be3894fc19c',
      'sec-ch-ua':'"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
      'sec-ch-ua-mobile':'?0',
      'sec-ch-ua-platform':"Windows"
   };

   try {
      const response = await fetch(url, { headers });
      const data = await response.json();
      return new Response(JSON.stringify(data))

   } catch (error) {
      console.error('Error fetching data:', error);
      return new Response('error')
   }

   
}
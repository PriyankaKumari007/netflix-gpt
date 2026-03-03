export const LOGO =
  "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-02-12/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const USER_AVATAR =
  "https://occ-0-5690-3662.1.nflxso.net/dnm/api/v6/SO2HoVCx33X8phZh2pZZmQ4QgNY/AAAABS8sWFjSyj1zyfgcnGamqyJ1E2ZubZGo8dndCM_ipf_5UpmVlkuf8IXzQlmPZQqTMWNjWukESRdLkFGHnf7zbY3MJCO3r4s.png?r=229";
export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Nzc1YTQ4OWFmMjRhMzAxNzZkMzMxMzgwYzUyNTIzNyIsIm5iZiI6MTc3MjM3Mjg1Mi42MzEsInN1YiI6IjY5YTQ0Mzc0NWFiNGY5NjUyNmRlOTA0MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TrkcJirBWuxXuuxYbuxomIFZ8Ga8PssNhEySH3_Kl8o",
  },
};

export const MOVIE_API = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Nzc1YTQ4OWFmMjRhMzAxNzZkMzMxMzgwYzUyNTIzNyIsIm5iZiI6MTc3MjM3Mjg1Mi42MzEsInN1YiI6IjY5YTQ0Mzc0NWFiNGY5NjUyNmRlOTA0MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TrkcJirBWuxXuuxYbuxomIFZ8Ga8PssNhEySH3_Kl8o'
  }
}
export const IMG_CDN_URL ="https://image.tmdb.org/t/p/w500";
export const NETFLIX_BACKGROUND ="https://assets.nflxext.com/ffe/siteui/vlv3/5eb03855-b753-4788-b9b3-0cc29e3d2891/web/IN-en-20260223-TRIFECTA-perspective_7bcba0fc-d5a5-42f6-b4ed-2ca56a458c61_large.jpg";

export const SUPPORTED_LANGUAGES = [{
  indentifier : "en",name:"English"
},
{
  indentifier : "hindi",name:"Hindi"
},
{
  indentifier : "spanish",name:"Spanish"
}];


export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;
export async function getHero() {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_CMS_URL}/api/hero`,
      { cache: "no-store" }
    );
  
    const data = await res.json();
  
    if (!data.docs || data.docs.length === 0) {
      return null;
    }
  
    return data.docs[0];
  }
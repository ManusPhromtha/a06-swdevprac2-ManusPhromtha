import Banner from "@/components/Banner";
import Card from "@/components/Card";

export default function Home() {
  return (
    <main>
      <Banner/>
      <div className="mt-[20px] mr-[20px] mb-[50px] ml-[20px] flex flex-row flex-wrap justify-around content-around">
          <Card venueName='The Bloom Pavilion' imgSrc='/img/bloom.jpg'/>
          <Card venueName='Spark Space' imgSrc='/img/sparkspace.jpg'/>
          <Card venueName='The Grand Table' imgSrc='/img/grandtable.jpg'/>
      </div>
    </main>
  );
}

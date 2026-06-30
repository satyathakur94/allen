import SimpleImageSlider from "react-simple-image-slider";
import './home.css'

const images = [
  { url: "https://asset.allen.in/495ea230-cf5b-4547-abc3-8748801df8b5/sc/image_preview_extra_large/secondaryContent.webp?__ar__=2.54&__name__=Banner_1_Destop" },
  { url: "https://asset.allen.in/0857e1ff-bc45-4126-aa2c-e6819fca30b5/sc/image_preview_extra_large/secondaryContent.webp?__ar__=2.54&__name__=Home%20page_Hero%20Banner" },
  { url: "https://asset.allen.in/a7a50541-5037-4a4b-bad2-1d7d1ddd6056/sc/image_preview_extra_large/secondaryContent.webp?__ar__=2.53&__name__=Frame%202087326991%20(1)" },
  { url: "https://asset.allen.in/770806dd-7408-44e2-a915-ecd74c189451/sc/image_preview_extra_large/secondaryContent.webp?__ar__=2.54&__name__=Group%201171286625" },
  { url: "https://asset.allen.in/6a79da42-a36e-46ad-b613-a19ac070151e/sc/image_preview_extra_large/secondaryContent.webp?__ar__=2.54&__name__=Group%201171287820" },
];


export default function Home(){
    return <>
    <center>
        <div className="slide-div">
            <SimpleImageSlider
            slideDuration={0.5}
        width={1200}
        height={466.96}
        images={images}
        showBullets={true}
        showNavs={true}
      />
        </div> 
    </center>
       
    </>
}
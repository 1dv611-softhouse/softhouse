import socials from "../pictures/socials/images2";

function Socials() {
  const socialMediaLinks = [
    "https://www.facebook.com/softhouseconsulting",
    "",
    "https://www.instagram.com/softhouseconsulting/",
    "",
    "",
  ];

  return (
    <div className="social-media-icons">
      {socials.map((img, index) => {
        return (
          <a href={socialMediaLinks[index]}>
            <img src={img} />
          </a>
        );
      })}
    </div>
  );
}

export default Socials;

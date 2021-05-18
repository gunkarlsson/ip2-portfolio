import { RepoDiv } from "../style/StyledComponents";
import img292817807 from "../img/292817807.png";
import img295981870 from "../img/295981870.png";
import img299697220 from "../img/299697220.png";
import img313314693 from "../img/313314693.png";
import img327256852 from "../img/327256852.png";
import img347632904 from "../img/347632904.png";

export const selectedRepos = [
  327256852, 299697220, 292817807, 313314693, 295981870, 347632904,
];

const images = {
  292817807: img292817807,
  295981870: img295981870,
  299697220: img299697220,
  313314693: img313314693,
  327256852: img327256852,
  347632904: img347632904,
};

const Repo = ({ repo }) => {
  const { name, description, homepage, id } = repo;
  return (
    <RepoDiv>
      <div className="repo-title">
        <h3>{name.charAt(0).toUpperCase() + name.slice(1)}</h3>
      </div>

      <div className="repo-image">
        <img src={images[id]} alt="Repo preview" />
      </div>

      <div className="info-text">
        <p>{description}</p>
        <p>
          Link to <a href={homepage}>demo</a>
        </p>
      </div>
    </RepoDiv>
  );
};

export default Repo;

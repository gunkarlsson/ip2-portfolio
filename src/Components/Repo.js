import { RepoDiv } from "../style/StyledComponents";
import img291994653 from "../img/291994653.png";
import img292817807 from "../img/292817807.png";
import img294136451 from "../img/294136451.png";
import img295981870 from "../img/295981870.png";
import img299697220 from "../img/299697220.png";
import img313314693 from "../img/313314693.png";
import img327256852 from "../img/327256852.png";
const images = {
  291994653: img291994653,
  292817807: img292817807,
  294136451: img294136451,
  295981870: img295981870,
  299697220: img299697220,
  313314693: img313314693,
  327256852: img327256852,
};

const Repo = ({ repo }) => {
  const { name, description, homepage, created_at, id } = repo;
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
        </p>{" "}
        <p>Created: {created_at.slice(0, -10)}</p>
      </div>
    </RepoDiv>
  );
};

export default Repo;

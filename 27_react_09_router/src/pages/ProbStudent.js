import { useParams, useNavigate, useSearchParams } from "react-router-dom";

const ProbStudent = () => {
  const { name } = useParams();
  console.log(name);

  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("name");

  return (
    <div>
      <h5>
        학생의 이름은 <span style={{ color: "green" }}>{name}</span> 입니다
      </h5>
      <h2>
        실제 이름은 <span style={{ color: "blue" }}>{keyword}</span> 입니다.
      </h2>
      <button onClick={() => navigate(-1)}>이전 페이지로 이동</button>
    </div>
  );
};

export default ProbStudent;

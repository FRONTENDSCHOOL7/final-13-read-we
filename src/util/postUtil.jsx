import { useNavigate } from 'react-router-dom';

function HandlePost() {
  const navigate = useNavigate();

  const handlePostBtn = () => {
    navigate('/postupload');
  };
  return handlePostBtn;
}
export default HandlePost;

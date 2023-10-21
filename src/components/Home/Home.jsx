import phoneImg from './telephone.png';

export default function Home() {
  return (
    <div className="home_wrapper">
      <h1 className="home_title">Welcome to your phonebook</h1>
      <img className="home_img" src={phoneImg} alt="phone" />
    </div>
  );
}

import "./Profile.css";

const Profile = () => {
  return (
    <section className="profile">
      <h2 className="profile__title">Mi perfil</h2>
      <p className="profile__email">
        Email: <strong>usuario@mammamia.com</strong>
      </p>
      <button className="btn btn-danger">Cerrar sesión</button>
    </section>
  );
};

export default Profile;

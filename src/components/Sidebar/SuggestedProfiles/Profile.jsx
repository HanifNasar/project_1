export function Profile({ userName, userImage, reason }) {
  return (
    <div className="sugestao">
      <div className="usuario">
        <img src={userImage} alt="foto do usuário" />
        <div className="texto">
          <div className="name">{userName}</div>
          <div className="razao">{reason}</div>
        </div>
      </div>

      <div className="seguir">Follow</div>
    </div>
  );
}

export function Likes({ pictureLiked, whoLiked, numberOfLikes }) {
  return (
    <div className="curtidas">
      <img src={pictureLiked} alt="foto do usuário" />
      <div className="texto">
         <strong>{whoLiked}</strong> {" "}
        <strong> {numberOfLikes} Likes</strong>
      </div>
    </div>
  );
}

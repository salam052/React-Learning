const ServerCard = ({ server }) => {

    return (
        <div>
            <h3>{server.name}</h3>
            <p>Type: {server.type}</p>
            <p>Status: {server.isOnline ? "Online" : "Offline"}</p>
        </div>
    );
};

export default ServerCard;
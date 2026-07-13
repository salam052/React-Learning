const ActionButtons = ({
  isConnected,
  onConnect,
  showDetails,
  onToggleDetails,
}) => {
  return (
    <div className="action-buttons">
      <button
        className={`connect-button ${isConnected ? "connected" : ""}`}
        onClick={onConnect}
      >
        {isConnected ? "Connected" : "Connect"}
      </button>

      <button className="details-button" onClick={onToggleDetails}>
        {showDetails ? "Hide Details" : "Show Details"}
      </button>
    </div>
  );
};

export default ActionButtons;
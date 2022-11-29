export default function (action, message, status) {
  localStorage.setItem("bellwether_alert_action", action);
  localStorage.setItem("bellwether_alert_message", message);
  localStorage.setItem("bellwether_alert_status", status);
}

export default function () {
  let alertAction = localStorage.getItem("bellwether_alert_action");
  let alertMessage = localStorage.getItem("bellwether_alert_message");
  let alertStatus = localStorage.getItem("bellwether_alert_status");

  return [alertAction, alertMessage, alertStatus];
}

export const phoneDisplay = "0597359130";
export const phoneIntl = "966597359130";
export const mapsUrl = "https://maps.app.goo.gl/pjUnApf4jnXYPTXx5";
export const callUrl = `tel:+${phoneIntl}`;

export function whatsappUrl(message: string) {
  return `https://wa.me/${phoneIntl}?text=${encodeURIComponent(message)}`;
}

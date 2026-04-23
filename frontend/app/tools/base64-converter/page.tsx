export const dynamic = 'force-static';
export const revalidate = false;

import Base64ConverterClient from "./Base64ConverterClient";

export default function Page() {
  return <Base64ConverterClient />;
}
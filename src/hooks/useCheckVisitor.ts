import { IpData } from "@/constant/types";

export const useCheckVisitor = () => {

  async function checkVisiter(visitUrl: string) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);
    const url = "/api/visit-user";

    try {
      const res = await fetch('https://ipapi.co/json/');
      const data: IpData = await res.json();

      const locRes = {
        ip: data.ip,
        city: data.city,
        region: data.region,
        country_name: data.country_name,
        org: data.org,
        network: data.network,
        latitude: data.latitude,
        longitude: data.longitude,
        timezone: data.timezone,
        utc_offset: data.utc_offset,
        asn: data.asn,
      };

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ visiterUrl: visitUrl, locRes: locRes }),
        signal: controller.signal,
      });
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const json = await response.json();
      return json
    } catch (error) {
      console.error(error);
    } finally {
      clearTimeout(timeout);
    }

  }
  return { checkVisiter }
}


import { IpData } from "@/constant/types";

export const useCheckVisitor = () => {

  async function checkVisiter(visitUrl: string) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);
    const url = "/api/visit-user";

    try {
      const res = await fetch('https://ipapi.co/json/');
      const data: IpData = await res.json();
      const { ip, city, region, country_name, org, network, latitude, longitude, timezone, utc_offset, asn } = data || {}

      const locRes = {
        ip: ip,
        city: city,
        region: region,
        country_name: country_name,
        org: org,
        network: network,
        latitude: latitude,
        longitude: longitude,
        timezone: timezone,
        utc_offset: utc_offset,
        asn: asn,
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


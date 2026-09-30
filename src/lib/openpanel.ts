import { OpenPanel } from "@openpanel/web"

const isProduction = process.env.NODE_ENV === "production"
const clientId = process.env.NEXT_PUBLIC_OPENPANEL_CLIENT_ID

class MockOpenPanel {
  track() {
    return Promise.resolve(null)
  }
  screenView() {}
  setGlobalProperties() {}
  identify() {
    return Promise.resolve(null)
  }
  alias() {}
  increment() {
    return Promise.resolve(null)
  }
  decrement() {
    return Promise.resolve(null)
  }
  clear() {}
  revenue() {
    return Promise.resolve(null)
  }
  flushRevenue() {
    return Promise.resolve()
  }
  clearRevenue() {}
  pendingRevenue() {}
  trackOutgoingLinks() {}
  trackScreenViews() {}
  trackAttributes() {}
  fetchDeviceId() {
    return Promise.resolve("")
  }
  getDeviceId() {
    return ""
  }
  getSessionId() {
    return ""
  }
}

export const op: OpenPanel =
  typeof window !== "undefined" && isProduction && clientId
    ? new OpenPanel({
        clientId,
        trackScreenViews: true,
      })
    : (new MockOpenPanel() as unknown as OpenPanel)

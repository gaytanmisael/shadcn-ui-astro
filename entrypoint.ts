import type { Alpine } from "alpinejs"
import focus from "@alpinejs/focus"
import collapse from "@alpinejs/collapse"

export default (Alpine: Alpine) => {
  Alpine.plugin(focus)
  Alpine.plugin(collapse)
}

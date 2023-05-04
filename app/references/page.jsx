import Image from "next/image"

import csb from "../../images/corporate-logo/logo-csb.png"
import toki from "../../images/corporate-logo/logo-toki.jpg"
import antep from "../../images/corporate-logo/logo-antep.png"
import ibb from "../../images/corporate-logo/logo-ibb.jpg"
import dsi from "../../images/corporate-logo/logo-dsi.png"
import kgm from "../../images/corporate-logo/logo-kgm.png"

const logos = [{
    path: csb,
  },
  {
    path: toki,
  },
  {
    path: antep,
  },
  {
    path: ibb,
  },
  {
    path: dsi,
  },
  {
    path: kgm,
  },
]

function References() {
  return (
    <>
    <div className="flex flex-col flex-wrap space-y-6 items-center justify-around p-6 md:flex-row">
      {logos.map((logo) => (
        <Image src={logo.path} width={400} />
      ))}
    </div>
    </>
  )
}

export default References
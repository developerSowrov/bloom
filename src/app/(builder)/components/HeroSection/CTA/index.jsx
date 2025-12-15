import CTALink from "./CTALink"

export default function CTA({ data }) {
  // console.log(data)
  return (
    <div className="max-xl:w-full">
      {
        data.enabled && data.entries.map((item, index) => (
            <CTALink id={item.id} url={item.url} key={index} bgColor={item.variant === "primary" ? "black" : "white"} >
              {item.label}
            </CTALink>
          )
        )
      }
    </div>
  )
}

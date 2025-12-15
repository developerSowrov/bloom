
export default function Section({ children, parentClassName, sectionClassName, bgImage }) {
  return (
      <div className={parentClassName} style={bgImage ? { "backgroundImage": `url(${bgImage})` } : {}}>
         <section className={`${sectionClassName} container`}>{children}</section>
      </div>
   );
}

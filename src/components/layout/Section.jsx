
export default function Section({ children, parentClassName = "", sectionClassName ="" }) {
  return (
      <div className={parentClassName}>
         <section className={`${sectionClassName} container`}>{children}</section>
      </div>
   );
}

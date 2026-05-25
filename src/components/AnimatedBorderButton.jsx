import { Download } from "lucide-react"



// export const AnimatedBorderButton = () => {
//     return(
//  <button
//  className="relative bg-transparent border border-border
//     text-foreground hover:border-primary/50 transition-all duration-1000
//     forcus-visible:ring-primary focus-:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 
//     disabled:opacity-50 disabled:cursor-not-allowed group px-8 py-4 text-lg font-medium rounded-full overflow-visible animated-border "
//  ><Download />Download Cv 
              
//               {/* Animated SVG  */}
               
//                <svg className="absolute left-0 top-0 w-full pointer-events-auto"
//                viewBox="0 0 200 60"
//                preserveAspectRatio ="none"
//                style={{overflow: "visible"}}
//                > 
//                <path 
//                d  ='M 30,1 A 29,29 0 1,1 170,1'
//                fill="none"
//                stroke="var(--color-primary)"
//                strokeWidth="2"
//                strokeDasharray="400 500"
//                strokeDashoffset="400"
//                strokeLinecap="round"
//                strokeLinejoin="round"

//                className="animated-border-path"
//                />
//                 </svg>
              
//               </button>
//     )
// }

export function AnimatedBorderButton({ children, color = "#6366f1", width = 160, height = 44 }) {
  const perimeter = 2 * (width + height)

  return (
    <button className="relative px-8 py-3 group" style={{ width, height }}>
      <svg
        className="absolute left-0 rounded-lg  top-0 pointer-events-none"
        width={width}
        height={height}
        style={{ overflow: "visible" }}
      >
        <rect
          x="1" y="1"
          width={width - 2}
          height={height - 2}
          rx="8"
          fill="transparent"
          stroke={color}
          strokeWidth="2"
          strokeDasharray={perimeter}
          strokeDashoffset={perimeter}
          style={{
            transition: "stroke-dashoffset 0.7s cubic-bezier(0.4,0,0.2,1)"
          }}
          className="group-hover:[stroke-dashoffset:0]"
        />
      </svg>
      <span style={{ color }} className="font-medium relative z-10">
        {children}
      </span>
    </button>
  )
}
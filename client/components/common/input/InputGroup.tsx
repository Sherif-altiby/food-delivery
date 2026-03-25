import { InputGroupTypes } from "@/types/index.types"

const InputGroup = ({type, required, label, Icon}: InputGroupTypes) => {
  return (
     <div className="relative group">
              <input 
                type={type}
                required={required}
                placeholder=" "
                className="peer w-full bg-background border border-white/5 rounded-2xl py-5 pl-12 pr-4 outline-none 
                           focus:border-primary/40 focus:ring-4 focus:ring-primary/5 transition-all"
              />
              <Icon className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-primary transition-colors" size={18} />
              <label className="absolute left-12 top-1/2 -translate-y-1/2 text-white/20 text-sm transition-all 
                                peer-placeholder-shown:text-sm 
                                peer-focus:-top-2 peer-focus:left-4 peer-focus:text-[10px] peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-primary
                                peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:left-4 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:uppercase">
                {label}
              </label>
            </div>

  )
}

export default InputGroup
// My Button

export function MyButton({ onClick, h, text}) {

    return (
        <div
            className={`flex flex-grow color-snow  w-${3*h} h-${h}`}
        >

            <button
                className="font-bold text-charcoal uppercase bg-opacity-50 bg-aqua-muted rounded-full shadow-xl border-4 border-navy border-opacity-30 px-2 hover:scale-105 transition ease-in-out"
                onClick={onClick}
            >
                {text}
            </button>
        </div>
    )
}
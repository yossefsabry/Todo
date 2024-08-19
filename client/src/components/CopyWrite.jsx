const CopyWrite =() => {
    const callDate = () => {
        const DateNow = new Date();
        const year = DateNow.getFullYear();
        return year + " - ";
    };
    return(
        <>
            <div className="wrapper d-block p-5">
                @copywrite {callDate()} 
                <span>
                    <a href="https://github.com/yossefsabry" className="text-blue-600                                       hover:underline dark:text-blue-500 transition" target="_blank">
                        yossefsabry
                    </a>
                </span>
            </div>
        </>
    );
};
export default CopyWrite;


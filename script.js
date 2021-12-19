(async() => {
    document.querySelector("body").addEventListener("click", document.querySelector("body").requestPointerLock)
    document.addEventListener("contextmenu", (ev) => {
        ev.preventDefault()
    })
    document.addEventListener("keydown", (ev) => {
        ev.preventDefault()
    })
    document.querySelector(".reload").onclick = () => location = location
    const delay = sec => new Promise(r => setTimeout(r, sec*1000))
    const cnsl = document.querySelector(".console")
    cnsl.innerHTML = `<span style="color:red">[${new Date(Date.now() + 10800000).toISOString().split("T")[1].replace("Z", "")}] Error! \"%schoolshell%/Binaries/shelldata.dll\" wasn't loaded<br>[${new Date(Date.now() + 10800063).toISOString().split("T")[1].replace("Z", "")}] Opening error page...</span>`
    await delay(1.4)
    let msg = [
        "Retrying...",
        "Load <span style=\"color:yellowgreen\">\"%schoolshell%/x64/system.sys\"</span>",
        "Load <span style=\"color:yellowgreen\">\"%schoolshell%/x64/pagefile.sys\"</span>",
        "Load <span style=\"color:yellowgreen\">\"%schoolshell%/x64/Gfrce.drv\"</span>",
        "Load <span style=\"color:yellowgreen\">\"%schoolshell%/Binaries/system.sys\"</span>",
        "Load <span style=\"color:yellowgreen\">\"%schoolshell%/Binaries/interface.dat\"</span>",
        "Load <span style=\"color:yellowgreen\">\"%schoolshell%/Binaries/shelldata.ini\"</span>",
        "Load <span style=\"color:yellowgreen\">\"%schoolshell%/Binaries/shelldata.dll\"</span>"
    ]
    for(let numb in msg) {
        await delay(Math.random() * 5)
        cnsl.innerHTML += `<br>[${new Date(Date.now() + 10800000).toISOString().split("T")[1].replace("Z", "")}] ${msg[numb]}`
    }
    await delay(1.46);
    cnsl.innerHTML += `<br><span style="color:red">[${new Date(Date.now() + 10800000).toISOString().split("T")[1].replace("Z", "")}] Error! \"%schoolshell%/Binaries/shelldata.dll\" doesn't exist</span>`
})()
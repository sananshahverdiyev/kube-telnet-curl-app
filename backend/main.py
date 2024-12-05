from fastapi import FastAPI, HTTPException
import subprocess

app = FastAPI()

@app.get("/curl")
def curl_pod(pod_ip: str, port: int):
    try:
        result = subprocess.run(
            ["curl", f"http://{pod_ip}:{port}"], capture_output=True, text=True
        )
        return {"output": result.stdout, "error": result.stderr}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/telnet")
def telnet_pod(pod_ip: str, port: int):
    try:
        result = subprocess.run(
            ["telnet", pod_ip, str(port)], capture_output=True, text=True, timeout=10
        )
        return {"output": result.stdout, "error": result.stderr}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

function passwordgenerate(){
    
var buyukharf="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    
var kucukharf="abcdefghijklmnopqrstuvwxyz"
        
var rakam="0123456789"
        
var sembol="!@#$%^&*()_+[]{}|;:,.<>?"
        
var r1=Math.floor(Math.random()*(buyukharf.length))
        
var r2=Math.floor(Math.random()*(buyukharf.length))
        
var r3=Math.floor(Math.random()*(kucukharf.length))
        
var r4=Math.floor(Math.random()*(kucukharf.length))
        
var r5=Math.floor(Math.random()*(rakam.length))
    
var r6=Math.floor(Math.random()*(rakam.length))
        
var r7=Math.floor(Math.random()*(sembol.length))
        
var r8=Math.floor(Math.random()*(sembol.length))
        
var k1=buyukharf[r1]
        
var k2=buyukharf[r2]
        
var k3=kucukharf[r3]
        
var k4=kucukharf[r4]
        
var k5=rakam[r5]
        
var k6=rakam[r6]
        
var k7=sembol[r7]
        
var k8=sembol[r8]
        
var sonuc=k1+k2+k3+k4+k5+k6+k7+k8
        
document.getElementById("sifre").value=sonuc
    
}
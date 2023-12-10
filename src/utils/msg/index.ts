const msg={
  success(title:string){
    uni.showToast({
      title:title ,
      duration:  1000,
      icon: 'success',
      mask: false,
    });
  },
  loading(title:string){
    uni.showToast({
      title:title ,
      duration:  3000,
      icon: 'loading',
      mask: false,
    });
  },
  info(title:string){
    uni.showToast({
      title:title ,
      duration:  2000,
      icon: 'none',
      mask: false,
    });
  },
  error(title:string){
    uni.showToast({
      title:title ,
      duration:  2000,
      icon: 'error',
      mask: false,
    });
  },
}



export default msg;

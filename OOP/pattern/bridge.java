interface SendMsgInterface {
  public void sendMsg();
 }

class EmailSendMsg implements SendMsgInterface{
    @Override
    public void sendMsg() {
        System.out.println("Email 方式发送");
    }
}

class SmsSendMsg implements SendMsgInterface{
     @Override
     public void sendMsg() {
         System.out.println("Sms 方式发送");
     }
}

 abstract class Msg {
      private SendMsgInterface smi;
      public Msg(SendMsgInterface smi) {
          this.smi = smi;
      }
      public abstract void send();
}



 class ImportantMsg extends Msg {
     public ImportantMsg(SendMsgInterface smi) {
         super(smi);
     }
     @Override
     public void send() {
         System.out.println("紧急信息");
     }
 }

 class NormalMsg extends Msg {
     public NormalMsg(SendMsgInterface smi) {
         super(smi);
     }
     @Override
     public void send() {
         System.out.println("普通信息");
     }
 }

public class BridgeTest {
    public static void main(String[] args) {
        // 以手机短信发送发送紧急信息
        SendMsgInterface smdSendMsg = new SmsSendMsg();
        Msg importantMsg = new ImportantMsg(smdSendMsg);
        importantMsg.send();
    }
}

namespace Phones
{
    public abstract class Phone 
    {
        private string _versionNumber;
        private int _batteryPercentage;
        private string _carrier;
        protected string _ringTone;
        public Phone(string versionNumber, int batteryPercentage, string carrier, string ringTone)
        {
            _versionNumber = versionNumber;
            _batteryPercentage = batteryPercentage;
            _carrier = carrier;
            _ringTone = ringTone;
        }
        // abstract method. This method will be implemented by the subclasses
        public abstract void DisplayInfo();
        // public getters and setters removed for brevity. Please implement them yourself
        
        public string Version
        {
            get { return _versionNumber; }
        }
        
        public int Battery
        {
            get { return _batteryPercentage; }
        }
        
        public string Carrier
        {
            get { return _carrier; }
        }
        
        public string Ringtone 
        {
            get { return _ringTone;}
        }
        
        
        
        
        
        
    }
    
}
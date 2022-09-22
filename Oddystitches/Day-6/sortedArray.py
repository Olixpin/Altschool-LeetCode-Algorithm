class Solution(object):
    def merge(self,nums1, m, nums2,n):
        i=0
        j=0
        x=len(nums1)-1
    
        while x>=0 and not nums1[m]:
            x-=1
        while j<len(nums2):
            if i>x and not nums1[i]:
                nums1[i]=nums2[j]
                j+=1
            elif nums1[i]>nums2[j]:
                self.shift(nums1,i)
                nums1[i]=nums2[j]
                x+=1
                j+=1
            i+=1
        return nums1
    def shift(self,num,i):
        j=len(num)-1
        while not num[j]:
            j-=1
        while j>=i:
            num[j+1]=num[j]
            j-=1


os=Solution()
l1=[0]
l2=[1]
print(os.merge(l1,0,l2,1))
